const gh = require('octonode');
//  Generate your own token here: https://github.com/settings/tokens
const { token } = require('../../token.json'); // eslint-disable-line import/no-unresolved


const client = gh.client(token); //  Regsiter the client token w/Octonode

/**
 *   fetchGithubStars - Handles the actual fetching of the GitHub stars
 *
 *   @param {String} url - The Github URL of the plugin's repo
 *
 *   @returns {Promise} - returns a promise that resolves with the github repo's `stargazers_count`
 *                        and rejects with an error if it couldn't be found
 */
// eslint-disable-next-line promise/avoid-new
const fetchGithubStars = (url) => new Promise((resolve, reject) => {
  //  Grab all but the last two parts of the url, parts being the parts between '/'
  const apiUrl = url.split('/').filter((c, i, a) => !(i < a.length - 2)).join('/');
  client.get(`repos/${apiUrl}`, {}, (error, status, body) => {
    return error
      ? reject(`repos/${apiUrl}`)
      : resolve(body.stargazers_count);
  });
});

module.exports = fetchGithubStars;
