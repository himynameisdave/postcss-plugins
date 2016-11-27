const plugins = require('../plugins.json');
const doPluginPrompts = require('./utils/doPluginPrompts.js');
const writePlugins = require('./utils/writePlugins.js');
//  Copy of plugins so as to keep original list immutable
const updatedPlugins = plugins;


//  Step One: Show the banner
console.log(require('./data/banner'));

//  Step Two: Do Prompts
(function addNewPlugin() {
  doPluginPrompts()
    .then(answers => {
      //  Add the new plugin to the list of updated plugins
      const { name, description, author, url, tags } = answers;
      updatedPlugins.push(Object.assign({}, { name, description, author, url, tags }, { stars: 0 }));
      //  Let the user know we are adding the plugin to the list for them
      console.log(`Adding the following plugin to the list:\n  -  ${name}`);

      //  Add another plugin if we need to
      if (answers.addAnother === true) {
        return addNewPlugin();
      }
      //  If we don't need to add a plugin, write the list of updated plugins
      return writePlugins(updatedPlugins, 'plugins.json');
    })
    .catch(console.warn);
}());
