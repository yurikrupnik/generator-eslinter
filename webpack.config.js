const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    node: {
        __dirname: false,
        __filename: true,
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader', 'eslint-loader'],
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: 'templates', to: 'templates' }
        ]),
    ]
};
