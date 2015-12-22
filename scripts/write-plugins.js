/**
 *    Module that will write to the plugins
 */
"use strict";
const fs = require("fs");

module.exports = (pluginsPath, plugins) => {
  return new Promise( (res, rej) => {
    fs.writeFile( pluginsPath, JSON.stringify(plugins, null, 2), (e) =>{
      if(e) rej(e);
      res("Updated the "+pluginsPath+" file");
    });
  });
};
