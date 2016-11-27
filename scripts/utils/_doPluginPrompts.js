const inquirer = require('inquirer');
const prompts = require('../data/newPluginPrompts.js');

const doPluginPrompts = () => new Promise((res, rej) => {
  inquirer.prompt(prompts, (answers) => answers ? res(answers) : rej('Warning! Error doing the prompts')); // eslint-disable-line no-confusing-arrow
});

module.exports = doPluginPrompts;
