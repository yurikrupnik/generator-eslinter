[![Build Status](https://travis-ci.org/yurikrupnik/generator-eslinter.svg?branch=master)](https://travis-ci.org/yurikrupnik/generator-eslinter)
[![Coverage Status](https://coveralls.io/repos/github/yurikrupnik/generator-eslinter/badge.svg?branch=master)](https://coveralls.io/github/yurikrupnik/generator-eslinter?branch=master)
# generator-eslinter

Generator-eslinter creates .eslintrc file with support for plugins and configs.

## Install
```
npm install --global generator-eslinter
```
## Usage
Example using eslint-config-airbrb
```
yo eslinter --configs=airbnb
```

## Extending generator
```
this.composeWith(require.resolve('generator-eslinter'), {
  /* options */
});
```

## Options
- plugins (String, default '') list of plugins separated by , .
- configs (String, default '') list of plugins separated by , .
