## PostCSS Plugin List [![npm version](https://badge.fury.io/js/postcss-plugins.svg)](http://badge.fury.io/js/postcss-plugins)

[![Join the chat at https://gitter.im/himynameisdave/postcss-plugins](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/himynameisdave/postcss-plugins?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A consolidated list of [PostCSS](https://github.com/postcss/postcss) plugins in an ready-to-use package.

### Purpose

There are [over a hundred wonderful developers](https://github.com/postcss/postcss/graphs/contributors) contributing to building PostCSS as well as plugins and tools built on top of it. The running list of plugins grows quickly, and is used in many places, such on the [PostCSS readme](https://github.com/postcss/postcss#plugins) and on the searchable [postcss.parts](http://postcss.parts) built by [**@mxstbr**](https://github.com/mxstbr). These are great resources for developers to find plugins, but they can sometimes be out of sync/incomplete.

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

### Submitting A New Plugin

All plugins are welcome, so long as they meet the [PostCSS Plugin Guidelines](https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md) (yes you will write some tests, and yes, you will like it :smile:).

**Steps**:

1. [Fork this repo](https://github.com/himynameisdave/postcss-plugins#fork-destination-box)
2. Edit [this JSON file](https://github.com/himynameisdave/postcss-plugins/blob/master/plugins.json) by adding your plugin with the following information:
  + **`name`** - name of your plugin, usually begins with `postcss-`
  + **`url`** - GitHub url for your plugin
  + **`description`** - a small description for your plugin
3. Submit your pull request & [chill out](http://i.imgur.com/dZzkNc7.gif).

---

*Licenced under MIT (c) Made by [Dave Lunny](https://twitter.com/dave_lunny) in the beautiful year 2015*
