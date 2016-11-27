const { assert } = require('chai');
const writePlugins = require('../scripts/utils/writePlugins.js');
const path = {
  test1: '.tmp/test_writePlugins-1.json',
  test2: '.tmp/test_writePlugins-2.json'
};

describe('utils/writePlugins', () => {
  it('writes a simple object to json', () => {
    const expected = { test: 'tested', number: 123 };
    writePlugins(expected, `test/${path.test1}`)
      .then(msg => {
        const actual = require(`./${path.test1}`);
        assert.deepEqual(expected, actual);
      })
      .catch(console.warn);
  });
  it('writes a copy of plugins.json to another json file', () => {
    const expected = require('../plugins.json');
    writePlugins(expected, `test/${path.test2}`)
      .then(msg => {
        const actual = require(path.test2);
        assert.deepEqual(expected, actual);
      })
      .catch(console.warn);
  });
});
