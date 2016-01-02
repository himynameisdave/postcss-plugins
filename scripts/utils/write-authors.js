/**
 *      Responsible for writing the authors
 */
'use strict';
const fs = require("fs");

module.exports = (authorsPath, authorsMD) => {
  return new Promise( (res, rej) => {
    fs.writeFile( authorsPath, authorsMD, (e) =>{
      if(e) rej(e);
      res("Updated the "+authorsPath+" file");
    });
  }); 
};
