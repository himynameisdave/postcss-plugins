'use strict';

const chalk      = require("chalk"),
      tags       = require("./tags.js"),
      plugins    = require("../../plugins.json"),
      tagChoices = tags.getTags().map((tag) => {
        return { name: tag };
      });


module.exports = [
  {
    type:    "input",
    name:    "name",
    message: "What is the name of your postcss plugin?",
    validate: ( providedName ) => {
      if( providedName.length < 1 ){
        return "Please provide an actual name for your plugin."
      }

      var exists = plugins.filter( (plugin) => {
        return plugin.name === providedName;
      }).length;

      if( exists ) return "This plugin has already been added to the list.";

      if( providedName.indexOf("postcss-") === -1 ){
        console.log( chalk.red("\nFYI: Plugin names usually start with 'postcss-' so they can easily be found on NPM.") );
      }
      return true;
    }
  },{
    type:    "input",
    name:    "description",
    message: "Describe your plugin by finishing this sentence:\nPostCSS plugin...",
    default: "eg: \"...that transforms your CSS.\""
  },{
    type:    "input",
    name:    "url",
    message: "What is the GitHub URL for your plugin?",
    validate: ( providedName ) => {
      if( providedName.indexOf("https://github.com/") > -1 )
        return true;
      else
        return "Please provide a valid GitHub URL";
    }
  },{
    type:    "input",
    name:    "author",
    message: "What is the GitHub username for the author of this plugin?"
  },{
    type:    "checkbox",
    name:    "tags",
    message: "Choose at least one tag that describes your plugin.\nFor descriptions of the tags, please see the list in full:\nhttps://github.com/himynameisdave/postcss-plugins/blob/master/docs/tags.md",
    choices: tagChoices,
    validate: ( answer ) => {
      if ( answer.length < 1 ) {
        return "You must choose at least one tag.";
      }
      return true;
    }
  },{
    type:     "confirm",
    name:     "addAnother",
    message:  "Would you like to add another plugin?",
    default:  false
  }
];
