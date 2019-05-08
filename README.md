![Build Status](https://img.shields.io/github/repo-size/yurikrupnik/generator-eslinter.svg)
![Build Status](https://img.shields.io/github/languages/code-size/yurikrupnik/generator-eslinter.svg)
![Build Status](https://img.shields.io/bundlephobia/min/generator-eslinter.svg)`
![CircleCI](https://circleci.com/gh/yurikrupnik/generator-eslinter.svg?style=svg)
![codecov](https://codecov.io/gh/yurikrupnik/generator-eslinter/branch/master/graph/badge.svg)
![BCH compliance](https://bettercodehub.com/edge/badge/yurikrupnik/generator-eslinter?branch=master)
![dependencies Status](https://david-dm.org/yurikrupnik/generator-eslinter/status.svg)
![devDependencies Status](https://david-dm.org/yurikrupnik/generator-eslinter/dev-status.svg)
![peerDependencies Status](https://david-dm.org/yurikrupnik/generator-eslinter/peer-status.svg)
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
