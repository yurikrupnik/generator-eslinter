const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

const {
    describe,
    test
} = global;

describe('Eslint generator', () => {
    test('use generator with default options', () => {
        return helpers.run(path.join(__dirname, '../index.js'))
            .then(function () {
                assert.file('.eslintrc');
                assert.file('.eslintignore');
                assert.fileContent('.eslintrc', '"parser": "babel-eslint"');
                assert.noFileContent('.eslintrc', 'jsx-a11y');
                assert.noFileContent('.eslintrc', 'airbnb');
                assert.noFileContent('.eslintrc', 'jest');
            });
    });
    test('use generator with configs and plugins options', () => {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                configs: 'airbnb',
                plugins: 'jest'
            })
            .then(function () {
                assert.file('.eslintrc');
                assert.fileContent('.eslintrc', 'airbnb');
                assert.fileContent('.eslintrc', 'jest');
            });
    });

    test('use generator configs and plugins options handle errors', () => {
        return helpers.run(path.join(__dirname, '../index.js'))
            .withOptions({
                configs: 'airbnb,none',
                plugins: 'jest, none'
            })
            .then(function () {
                assert.file('.eslintrc');
                assert.fileContent('.eslintrc', 'airbnb');
                assert.noFileContent('.eslintrc', 'none');
                assert.fileContent('.eslintrc', 'jest');
            });
    });
});
