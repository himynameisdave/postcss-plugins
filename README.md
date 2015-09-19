## PostCSS Plugin List [![npm version](https://badge.fury.io/js/postcss-plugins.svg)](http://badge.fury.io/js/postcss-plugins) [![Join the chat at https://gitter.im/himynameisdave/postcss-plugins](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/himynameisdave/postcss-plugins?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The "officially unofficial" consolidated list of [PostCSS](https://github.com/postcss/postcss) plugins in a ready-to-use package.

<img align="right" width="375" height="375"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo.svg">

### Purpose

There are [over a hundred wonderful developers](https://github.com/himynameisdave/postcss-plugins/blob/master/docs/authors.md) building amazing PostCSS plugins. The running list of plugins grows quickly, and is used in many places, such on the [PostCSS readme](https://github.com/postcss/postcss#plugins) and on the searchable [postcss.parts](http://postcss.parts) built by [**@mxstbr**](https://github.com/mxstbr). These are great resources for developers to find plugins, but they can sometimes be out of sync/incomplete.

The purpose of this is to be as clear and concise as possible, and provide a consolidated package for developers who need an up-to-date list of PostCSS plugins.

### Install

```
npm i postcss-plugins
```

### Usage

```javascript

var plugins = require('postcss-plugins');

//  Sample usage: print the name of every plugin in the dataset
plugins.forEach( function( plugin ){
  console.log(plugin.name);
});

```

### Submiting A Plugin

All plugins are welcome, so long as they meet the [PostCSS Plugin Guidelines](https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md) (yes you will write some tests, and yes, you will like it :smile:).

**Steps**:

1. [Fork this repo](https://github.com/himynameisdave/postcss-plugins#fork-destination-box)
2. Run `npm i` to quickly install the dependencies that the [scripts](https://github.com/himynameisdave/postcss-plugins/tree/master/scripts) rely on.
3. Run `npm run add`. You will then be prompted for info about your plugin:
    ![plugin adding is cool dot gif.com.thebomb.org.net.parts.jpg](http://i.imgur.com/BnXByh8.gif)
4. Commit & push your changes.
5. Submit your pull request.
6. [Chill out](http://i.imgur.com/dZzkNc7.gif).

### Changes

See the [changelog](https://github.com/himynameisdave/postcss-plugins/blob/master/CHANGELOG.md) for a list of releases, changes & updates.

---

*Licenced under MIT (c) Made by [Dave Lunny](https://twitter.com/dave_lunny) in the beautiful year 2015*
