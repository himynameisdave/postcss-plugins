const plugins = require('../plugins.json');
const logProgress = require('./utils/logProgress.js');
const getProgress = require('./utils/getProgressPercentage.js');
const writePlugins = require('./utils/writePlugins.js');
const fetchGithubStars = require('./utils/fetchGithubStars.js');

let numberOfPluginsCompleted = 0; // Used to track progress
const updatedPlugins = plugins; // Copy of plugins so as not to mutate the originals

plugins.map((plug, i) => {
  //  Fix for people that host on places like bitbucket
  if (plug.url.indexOf('github.com') < 0) {
    updatedPlugins[i].stars = 0;
    numberOfPluginsCompleted += 1;
    logProgress(getProgress(numberOfPluginsCompleted, plugins.length));
    return plug;
  }
  return fetchGithubStars(plug.url)
          .then(stars => {
            //  Modify our updatedPlugins list
            updatedPlugins[i].stars = stars;
            //  Iterate the numberOfPluginsCompleted
            numberOfPluginsCompleted += 1;
            //  Logs our progress to the console
            logProgress(getProgress(numberOfPluginsCompleted, plugins.length));
            //  We know that we're done if we just completed the last plugin
            if (numberOfPluginsCompleted > plugins.length - 1) {
              writePlugins(updatedPlugins, 'plugins.json')
                .then(msg => console.log(`\n${msg}\n`))
                .catch(e => console.warn(`\n${e}\n`));
            }
          })
          .catch(e => {
            console.log(`\nERROR: Failed to find the following repo:\n${e}`);
          });
});
