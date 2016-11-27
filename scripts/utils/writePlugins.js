const fs = require('fs');

/**
 *   writePlugins - Responsible for writing 'plugins.json'
 *
 *   @param {Array} plugins The updated array of plugins
 *
 *   @returns {Promise} Promise that will reject if there is an error writing the plugins
 */
const writePlugins = (plugins, path) => new Promise((res, rej) => {
  fs.writeFile(path, JSON.stringify(plugins, null, 2), (e) => e ? rej(e) : res('Updated the plugins.json file.')); // eslint-disable-line no-confusing-arrow
});
module.exports = writePlugins;
