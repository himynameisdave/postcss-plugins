/**
 *    Prompts for new plugins. Returns a promise which returns the answers if response is good
 */

'use strict';
const inquirer   = require("inquirer"),
      prompts    = require("../data/new-prompts");


module.exports = (cb) => {
  inquirer.prompt( prompts, (answers) => {
    if(answers) return cb(answers);

    return cb("Couldn't find answers");
  });
};
