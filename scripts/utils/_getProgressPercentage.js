/**
 *   getProgressPercentage is a simple one-liner that returns
 *   the percentage of the way through an array you are
 *
 *   @param {Number} i   The current index of the array
 *   @param {Number} arrLength  The length of the array we are testing against
 *
 *   @returns {Number}     Percentage of the way through the array that the index is
 */
const getProgressPercentage = (i, arrLength) => Math.floor((i / arrLength) * 100);
module.exports = getProgressPercentage;
