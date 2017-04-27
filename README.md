# Useref plugin for Webpack

[![npm version](https://badge.fury.io/js/webpack-useref-plugin.svg)](https://badge.fury.io/js/webpack-useref-plugin) [![DEPENDENCIES](https://david-dm.org/azzgo/webpack-useref-plugin.svg)](https://david-dm.org/azzgo/webpack-useref-plugin) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)]()

[![NPM](https://nodei.co/npm/webpack-useref-plugin.png)](https://nodei.co/npm/webpack-useref-plugin/)

This Package is relied on html-webpack-plugin

## Installation

```sh
$ npm install html-webpack-plugin webpack-useref-plugin --save-dev
```

## Usage

```javascript

var UserefPlugin = require('html-webpack-plugin-before-html-useref');

module.exports = {
  plugins: [
    new UserefPlugin()
  ]
}
```

## TODO

- [ ] Provide more options for Custermise
- [ ] Hash Options for output bundle
- [ ] Remove html-plugin-webpack denpendencies
