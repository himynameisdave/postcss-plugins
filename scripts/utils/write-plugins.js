const fs = require('fs');

/**
 *   writePlugins - Responsible for writing 'plugins.json'
 *
 *   @param {Array} plugins The updated array of plugins
 *
 *   @returns {Promise} Promise that will reject if there is an error writing the plugins
 */
const writePlugins = (plugins, path) => new Promise((resolve, reject) => { // eslint-disable-line promise/avoid-new
  fs.writeFile(path, JSON.stringify(plugins, null, 2), (error) => {
    return error
      ? reject(error)
      : resolve('Updated the plugins.json file.');
  });
});
module.exports = writePlugins;
