const fs = require('fs');
const path = require('path');
const plugins = require('../plugins.json');


const timeLogLabel = '\nAuthors list sucessfully updated in only';
const textBlock = '### Authors\n\n'
                  + 'Below is a list of all the wonderful people who make PostCSS plugins.\n\n'
                  + '|**Author**   |   **Plugin(s)**   |   **Stars**|\n'
                  + '|---|---|---|\n';

const sortFunction = (a, b) => {
  if (a.plugins.length < b.plugins.length) {
    return 1;
  } else if (a.plugins.length > b.plugins.length) {
    return -1;
  } else if (a.plugins.length === b.plugins.length) {
    if (a.author.toLowerCase() > b.author.toLowerCase()) {
      return 1;
    } else if (a.author.toLowerCase() < b.author.toLowerCase()) {
      return -1;
    }
    return 0;
  }
  return 0;
};

console.time(timeLogLabel);
const authors = plugins.reduce((accumulator, i) => {
  const newPlugin = `   |    [\`${i.name}\`](${i.url})   |   ${i.stars || 0}|\n`;
  const currentAuthor = accumulator.filter((a) => a.author === i.author);
  if (currentAuthor.length === 0) {
    accumulator.push({
      author: i.author,
      plugins: [newPlugin],
    });
  } else {
    currentAuthor[0].plugins.push(`|${newPlugin}`);
  }
  return accumulator;
}, [])
  .sort(sortFunction)
  .reduce((accumulator, i) => `${accumulator}|[${i.author}](https://github.com/${i.author})${i.plugins.join('')}`, textBlock);

//  Actually write the authors.md file
fs.writeFile(path.join(process.cwd(), 'docs/authors.md'), authors, (oops) => {
  if (oops) throw oops;
  console.timeEnd(timeLogLabel);
});
