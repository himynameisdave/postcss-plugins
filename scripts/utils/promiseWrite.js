/**
  *    Promisifies fs.writeFile
  *
  *    @param {string} path - path to the file being written
  *    @param {string} fileContents - the contents of the file being written
  *    @return {Promise} - promise that is rejected if there is an issue writing the file
  */
'use script';
const fs = require('fs');

module.exports = (path, fileContents) => {
  return new Promise((res, rej) => {
    fs.writeFile(path, fileContents, (e) => {
      if (e) rej(e);
      res(`Updated ${path}!`);
    });
  });
};
