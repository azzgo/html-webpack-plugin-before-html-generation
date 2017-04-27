# Useref plugin for Webpack

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
