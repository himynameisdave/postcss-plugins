/**
 *    Adds a new plugin, following this recipe:
 *
 *      1. Log banner
 *      2. Prompt user for new plugin info
 *      3. If/while the user requests more plugins to add, continue to prompt
 *      4. Write plugins.json with new plugin(s)
 *      5. Update the authors.md using new plugins info
 */
'use strict';
(() => {

  const fs             = require('fs'),
        pluginsPath    = 'plugins.json',
        plugins        = require(`../${pluginsPath}`),
        banner         = require('./data/banner'),
        newPlugPrompts = require('./utils/new-plug-prompts'),

        writePlugins   = require('./utils/write-plugins'),
        write          = require('./utils/promiseWrite'),

        newPlugins     = [],
        doPrompts      = (done) => {
          return newPlugPrompts((answers) => {
            newPlugins.push({
              name:         answers.name,
              description:  answers.description,
              url:          answers.url,
              author:       answers.author,
              tags:         answers.tags
            });
            //  run this function again if they want to add another plugin
            if( answers.addAnother ){
              doPrompts(done);
            }else{
            //  if they don't want to add another, fire the done callback
              done();
            }
          });
        };



  //  1. log banner
  console.log( banner );
  //  2 & 3. Prompt & continue to prompt about new plugins
  doPrompts(() => {
  //  4. Write the new plugins


    // write(pluginsPath, JSON.stringify(newPlugins, null, 2));


    writePlugins(pluginsPath, plugins.concat(newPlugins))
      .then( (msg) => {
        console.log(msg);
      })
      .catch(console.warn);
  });

})();
