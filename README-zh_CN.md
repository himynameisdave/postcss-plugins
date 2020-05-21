## PostCSS 插件列表 [![npm version](https://img.shields.io/npm/v/postcss-plugins.svg)](https://www.npmjs.com/package/postcss-plugins) [![contributors](https://img.shields.io/github/contributors/himynameisdave/postcss-plugins.svg)](https://github.com/himynameisdave/postcss-plugins/blob/master/docs/authors.md)


开箱即用型"官方和非官方"综合[PostCSS](https://github.com/postcss/postcss) 插件

<img align="right" width="100" height="100"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo.svg">

### 目的

这里有 [超过数百人的优秀开发者](https://github.com/himynameisdave/postcss-plugins/blob/master/docs/authors.md) 正在构建令人惊叹的 PostCSS 插件。插件运行列表增长速度非常块，而且已经在很多地方投入使用了。通过 [**@mxstbr**](https://github.com/mxstbr) 构建的 [postcss.parts](http://postcss.parts) 可以搜索到。另一个是 [**@chrisopedia**](https://github.com/chrisopedia) 创建的 [PostCSS Alfred Workflow](https://github.com/chrisopedia/alfred-postcss-workflow)。对于开发者来说，这些是非常的好的资源用来查找和使用，而且这个列表会持续更新。

目的尽可能简洁明了但仍然会向开发者提供一些插件相关的数据

**简而言之** 这是一个包含大量 PostCSS 插件的源数据列表

### 安装

**使用 yarn**

```
yarn add postcss-plugins
```

**使用 npm**

```
npm i postcss-plugins
```

### 使用

```javascript

const plugins = require('postcss-plugins');

//  基本用法: 获取数据集里面的每个插件名
const namesOfEveryPlugin = plugins.map(plugin => plugin.name);

//  基本用法: 获取star数最多的插件
const mostStarredPlugin = plugins.reduce((a, p) => a.stars && p.stars > a.stars ? p : a, { stars: 0 });

//  基本用法: 看看 himynameisdave 已经写了多少个插件
const himynameisdavesPlugins = plugins.reduce((a, p) => p.author === 'himynameisdave' ? ++a : a, 0)

```

### 提交一个新的插件

欢迎所有插件，只要符合 [PostCSS Plugin Guidelines](https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md) 的插件指南。
这些脚本可以让添加插件变得像回答一些关于它的问题一样简单。

**步骤**:

1. [Fork 这个仓库](https://github.com/himynameisdave/postcss-plugins#fork-destination-box).
1. 运行 `yarn install` / `npm install` 快速安装 [脚本](https://github.com/himynameisdave/postcss-plugins/tree/master/scripts) 所依赖的依赖项。
1. 运行 `yarn run add` / `npm run add`。 然后系统会提示你输入有关插件的信息，按照提示操作即可。
1. 然后将你的插件添加到 [`plugins.json`](https://github.com/himynameisdave/postcss-plugins/blob/master/plugins.json) 和 你的插件名 到 [`authors.md`](https://github.com/himynameisdave/postcss-plugins/blob/master/docs/authors.md) 列表中。
1. 提交并推送变更，然后提交 pull request.
1. [别着急](http://i.imgur.com/dZzkNc7.gif)

**请注意** `plugins.json` 和 `authors.md` **都不要直接编辑**。 反而，请按照上面的步骤确保你的拉取请求能够及时合并。 同时, 不用操心 Github start 数量，因为这是维护人员定期完成的。

### 更新日志

有关发布、更改和更新的列表，请参见[更新日志](https://github.com/himynameisdave/postcss-plugins/blob/master/CHANGELOG.md)。