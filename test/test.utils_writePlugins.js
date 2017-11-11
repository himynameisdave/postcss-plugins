const fs = require('fs-extra');
const path = require('path');
const chai = require('chai');
const writePlugins = require('../scripts/utils/writePlugins.js');


describe('utils/writePlugins', () => {
  const TEMP_DIR = path.resolve(__dirname, '.tmp/');
  const PATHS = {
    test1: '.tmp/test_writePlugins-1.json',
    test2: '.tmp/test_writePlugins-2.json'
  };
  before(() => {
    fs.ensureDirSync(TEMP_DIR);
  });
  it('writes a simple object to json', () => {
    const expected = { test: 'tested', number: 123 };
    writePlugins(expected, `test/${PATHS.test1}`)
      .then(() => {
        const actual = require(`./${PATHS.test1}`); // eslint-disable-line
        chai.assert.deepEqual(expected, actual);
      })
      .catch(console.warn);
  });
  it('writes a copy of plugins.json to another json file', () => {
    const expected = require('../plugins.json');  // eslint-disable-line
    writePlugins(expected, `test/${PATHS.test2}`)
      .then(() => {
        const actual = require(`./${PATHS.test2}`);  // eslint-disable-line
        chai.assert.deepEqual(expected, actual);
      })
      .catch(console.warn);
  });
});
