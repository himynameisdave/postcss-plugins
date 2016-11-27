const { red } = require('chalk');
const tags = require('./tags.js');
const plugins = require('../../plugins.json');
const tagChoices = tags.getTags();


module.exports = [{
  type: 'input',
  name: 'name',
  message: 'What is the name of your postcss plugin?',
  validate: (providedName) => {
    if (providedName.length < 1) {
      return 'Please provide an actual name for your plugin.';
    }
    if (plugins.includes(plug => plug.name === providedName)) {
      return 'This plugin has already been added to the list.';
    }
    //  Warn users that postcss-plugins usually start with 'postcss'
    if (!providedName.startsWith('postcss-')) {
      console.log(red('\nFYI: Plugin names usually start with \'postcss-\' so they can easily be found on NPM.'));
    }
    return true;
  }
}, {
  type: 'input',
  name: 'description',
  message: 'Describe your plugin by finishing this sentence:\nPostCSS plugin...',
  default: 'eg: \'...that transforms your CSS.\''
}, {
  type: 'input',
  name: 'url',
  message: 'What is the GitHub URL for your plugin?',
  validate: (givenUrl) => givenUrl.includes('https://github.com/') ? true : 'Please provide a valid GitHub URL' // eslint-disable-line no-confusing-arrow
}, {
  type: 'input',
  name: 'author',
  message: 'What is the GitHub username for the author of this plugin?'
}, {
  type: 'checkbox',
  name: 'tags',
  message: 'Choose at least one tag that describes your plugin.\nFor descriptions of the tags, please see the list in full:\nhttps://github.com/himynameisdave/postcss-plugins/blob/master/docs/tags.md',
  choices: tagChoices,
  validate: (answer) => answer.length < 1 ? 'You must choose at least one tag.' : true // eslint-disable-line no-confusing-arrow
}, {
  type: 'confirm',
  name: 'addAnother',
  message: 'Would you like to add another plugin?',
  default: false
}];
