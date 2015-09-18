
/**
 *    Prompts a user for a bunch of new info
 */
(function(){

  var inquirer   = require("inquirer"),
      chalk      = require("chalk"),
      banner     = require("./banner.js"),
      tags       = require("./tags.js")(),
      tagChoices = tags.getTags().map(function(tag){
        return { name: tag };
      }),
      questions  = [
        {
          type:    "input",
          name:    "name",
          message: "What is the name of your postcss plugin?",
          validate: function( providedName ){
            if( providedName.length < 1 ){
              return "Please provide an actual name for your plugin."
            }
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
          validate: function( providedName ){
            if( providedName.indexOf("https://github.com/") > -1 )
              return true;
            else
              return "Please provide a valid GitHub URL";
          }
        },{
          type:    "checkbox",
          name:    "tags",
          message: "Choose at least one tag that describes your plugin.\nFor descriptions of the tags, please see the list in full:\nhttps://github.com/himynameisdave/postcss-plugins/blob/master/docs/tags.md",
          choices: tagChoices,
          validate: function( answer ) {
            if ( answer.length < 1 ) {
              return "You must choose at least one tag.";
            }
            return true;
          }
        }
      ];


//  START DA SCRIPT

  //  1. Hello
  console.log("Let's add a new postcss plugin!");

  //  2. Da Questions
  inquirer.prompt( questions, function(answers){
    console.log( chalk.yellow("Adding a postcss plugin with the following properties:") );
    console.log( chalk.cyan("name:\n   ")+chalk.green(answers.name) );
    console.log( chalk.cyan("description:\n    ")+chalk.green(answers.description) );
    console.log( chalk.cyan("url:\n   ")+chalk.green(answers.url) );
    console.log( chalk.cyan("tags:") );
    answers.tags.forEach(function( tag ){
      console.log( chalk.green("   - "+tag) );
    });
  });

})();
