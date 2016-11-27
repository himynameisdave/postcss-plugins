const { assert } = require('chai');
const getProgressPercentage = require('../scripts/utils/getProgressPercentage.js');


describe('utils/getProgressPercentage', () => {
  it('returns 10 when index = 1 and length = 10', () => {
    assert.equal(getProgressPercentage(1, 10), 10);
  });
  it('returns 25 when index = 25 and length = 100', () => {
    assert.equal(getProgressPercentage(25, 100), 25);
  });
  it('returns 69 when index = 316 and length = 457', () => {
    assert.equal(getProgressPercentage(316, 457), 69);
  });
  it('returns 100 when index = 666 and length = 666', () => {
    assert.equal(getProgressPercentage(666, 666), 100);
  });
});
