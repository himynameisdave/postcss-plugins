/**
 *   logProgress - Logs the current progress to the console,
 *   while deleting the line that preceeded it
 *
 *   @param {String or Number} progress The current percentage of the way through the task that we are
 *
 */
const logProgress = (progress) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Progress: ${progress}%`);
};

module.exports = logProgress;
