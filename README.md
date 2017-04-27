# Useref plugin for Webpack

## Installation

```sh
$ npm install html-webpack-plugin-before-html-useref --save-dev
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
