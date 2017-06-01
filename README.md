## PostCSS Plugin List [![npm version](https://img.shields.io/npm/v/postcss-plugins.svg)](https://www.npmjs.com/package/postcss-plugins) [![contributors](https://img.shields.io/github/contributors/himynameisdave/postcss-plugins.svg)](https://github.com/himynameisdave/postcss-plugins/blob/master/docs/authors.md)



The "officially unofficial" consolidated list of [PostCSS](https://github.com/postcss/postcss) plugins in a ready-to-use package.

<img align="right" width="100" height="100"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo.svg">

### Purpose

There are [over a hundred wonderful developers](https://github.com/himynameisdave/postcss-plugins/blob/master/docs/authors.md) building amazing PostCSS plugins. The running list of plugins grows quickly, and is used in many places. One such place is on the searchable [postcss.parts](http://postcss.parts) built by [**@mxstbr**](https://github.com/mxstbr). Another is in the [PostCSS Alfred Workflow](https://github.com/chrisopedia/alfred-postcss-workflow) created by [**@chrisopedia**](https://github.com/chrisopedia). These are great resources for developers to find and use plugins, and this list helps keep them all up to date.

The goal is to be as concise and clear as possible while still offering a lot of data about each plugin to developers.


### Install

**With yarn**

```
yarn add postcss-plugins
```

**With npm**

```
npm i postcss-plugins
```

### Usage

```javascript

const plugins = require('postcss-plugins');

//  Sample usage: get the name of every plugin in the dataset
const namesOfEveryPlugin = plugins.map(plugin => plugin.name);

//  Sample usage: get plugin with the most stars
const mostStarredPlugin = plugins.reduce((a, p) => a.stars && p.stars > a.stars ? p : a, { stars: 0 });

//  Sample usage: see how many plugins himynameisdave has written
const himynameisdavesPlugins = plugins.reduce((a, p) => p.author === 'himynameisdave' ? ++a : a, 0)

```

### Submitting A New Plugin

All plugins are welcome, so long as they meet the [PostCSS Plugin Guidelines](https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md). There are scripts in place to make adding your plugin as easy as answering a few questions about it.

**Steps**:

1. [Fork this repo](https://github.com/himynameisdave/postcss-plugins#fork-destination-box).
2. Run `yarn install`/`npm i` to quickly install the dependencies that the [scripts](https://github.com/himynameisdave/postcss-plugins/tree/master/scripts) rely on.
3. Run `yarn run add`/`npm run add`. You will then be prompted for info about your plugin:

    ![plugin adding is cool dot gif.com.thebomb.org.net.parts.jpg](https://d17oy1vhnax1f7.cloudfront.net/items/1a153z3N411c3d0b351c/Screen%20Recording%202016-11-27%20at%2010.40%20AM.gif?v=035d9ac6)
4. This will add your plugin to [`plugins.json`](https://github.com/himynameisdave/postcss-plugins/blob/master/plugins.json) and your name/plugin to the [`authors.md`](https://github.com/himynameisdave/postcss-plugins/blob/master/docs/authors.md) list.
5. Commit & push your changes, then submit your pull request.
6. [Chill out](http://i.imgur.com/dZzkNc7.gif).

### Changes

See the [changelog](https://github.com/himynameisdave/postcss-plugins/blob/master/CHANGELOG.md) for a list of releases, changes & updates.
