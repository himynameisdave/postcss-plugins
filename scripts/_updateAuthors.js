const fs = require('fs');
const path = require('path');
const plugins = require("../plugins.json");
const textBlock = '### Authors\n\n'
                  + 'Below is a list of all the wonderful people who make PostCSS plugins.\n\n'
                  + '**Author**  |   **Plugin(s)**\n'
                  + '---|---\n'

console.time(`Authors list has sucessfully been updated!\nTook ya only`);
const authors = plugins.reduce((acc, i) => {
  const newPlugin = `   |    [\`${i.name}\`](${i.url})\n`;
  const currentAuthor = acc.filter(a => a.author === i.author);
  if (currentAuthor.length === 0) {
    acc.push({ author: i.author, plugins: [ newPlugin ] });
  } else {
    currentAuthor[0].plugins.push(newPlugin);
  }
  return acc;
}, [])
.sort((a, b) => b.plugins.length - a.plugins.length)
.reduce((acc, i) => `${acc}[${i.author}](https://github.com/${i.author})${i.plugins.join('')}`, textBlock);

fs.writeFile(path.join(process.cwd(), `docs/authors.md`), authors, oops => {
  if(oops) throw oops;
  console.timeEnd(`Authors list has sucessfully been updated!\nTook ya only`);
});
