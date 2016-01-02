/**
*   Responsible for going in and updating the Stargazer numbers in the plugins
*/
"use strict";
(() => {

//    Get the plugin list
let   plugins = require("../plugins.json");
let   completed = 0;
//    Require dependencies
const gh = require("octonode"),
      fs = require("fs"),
      writePlugins = require("./write-plugins"),
//    This is a personal GH API token that has been added to .gitignore. Get your own damn token!
      token = require("../token.json").token,
      client = gh.client(token),
      fetch = (url) => {
        return new Promise((res, rej)=>{
          let apiUrl = url.split("/")
            .filter((chunk, i, arr)=>{
              return i < arr.length - 2 ? false : true;
            })
            .join('/');

          client.get('repos/'+apiUrl, {}, (err, status, body)=>{
            if(err) return rej('repos/'+apiUrl);
            return res(body);
          });
        });
      },
//    returns the percentage of the way through the update we are
      progress = (currentPlugin) => {
        return Math.floor((currentPlugin / plugins.length) * 100) + "%";
      },
//    Updates the progress in the console
      updateProgress = (currentPlugin) => {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write( "Progress: "+progress(currentPlugin) );
      }

//    Loop the plugins
      plugins.forEach((plug, i) => {
        fetch(plug.url)
           .then((repo)=>{
              plugins[i].stars = repo.stargazers_count;
              completed++;
              updateProgress(completed);
              if(completed > plugins.length - 1){
                writePlugins('plugins.json', plugins)
                  .then((msg)=>{
                    console.log("\n"+msg+"\n");
                  })
                  .catch(console.warn)
              }
           })
           .catch((e)=>{
             console.log("Failed to find this repo: ", e);
           });
      });

})();
