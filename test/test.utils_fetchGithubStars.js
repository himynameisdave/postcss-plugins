const { assert } = require('chai');
const fetchGithubStars = require('../scripts/utils/fetchGithubStars.js');

describe('utils/fetchGithubStars', () => {
  it('fetches the correct number of stars', () => {
    const testRepo = 'https://github.com/himynameisdave/HTML5-Storage-Game';
    const expected = 1; // hopefully no one will go and star this super old repo I have
    fetchGithubStars(testRepo)
      .then(stars => assert.equal(stars, expected));
  });
});
