const plugins = require('../plugins.json');
const writePlugins = require('./utils/write-plugins');
const getProgress = require('./utils/_getProgressPercentage.js');
const logProgress = require('./utils/_logProgress.js');
const fetchGithubStars = require('./utils/_fetchGithubStars.js');

let numberOfPluginsCompleted = 0; // Used to track progress
const updatedPlugins = plugins; // Copy of plugins so as not to mutate the originals

plugins.map((plug, i) => (
  fetchGithubStars(plug.url)
    .then(stars => {
      //  Modify our updatedPlugins list
      updatedPlugins[i].stars = stars;
      //  Iterate the numberOfPluginsCompleted
      ++numberOfPluginsCompleted;
      //  Logs our progress to the console
      logProgress(getProgress(numberOfPluginsCompleted, plugins.length));
      //  We know that we're done if we just completed the last plugin
      if (numberOfPluginsCompleted > plugins.length - 1) {
        writePlugins('plugins.json', updatedPlugins)
          .then(msg => console.log(`\n${msg}\n`))
          .catch(e => console.warn(`\n${e}\n`));
      }
    })
    .catch(e => {
      console.log(`\nERROR: Failed to find the following repo:\n${e}`);
    })
));
