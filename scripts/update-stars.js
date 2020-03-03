
const writePlugins = require('./utils/write-plugins.js');
const fetchGithubStars = require('./utils/fetch-github-stars.js');
const plugins = require('../plugins.json');


const starsPromises = plugins.map((plug) => {
  //  Fix for people that host on places like bitbucket
  if (!plug.url.includes('github.com')) {
    return Promise.resolve(0);
  }
  return fetchGithubStars(plug.url).catch((error) => {
    console.log(`\nERROR: Failed to find the following repo:\n${error}`);
  });
});

Promise.all(starsPromises)
  .then((stars) => {
    const updatedPlugins = plugins.map((plug, i) => ({
      ...plug,
      stars: stars[i] || 0,
    }));
    return writePlugins(updatedPlugins, 'plugins.json');
  })
  .catch((error) => {
    console.log(`\nERROR: Something went horribly wrong and the doggos are all dead:\n${error}`);
  });
