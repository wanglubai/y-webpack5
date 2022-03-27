const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: { import: './index.js' },
    },
    output: {
        clean: true,
        charset: false
    },
    devServer: {
        port: 8080,
        hot: true
    },
    plugins: [new HtmlWebpackPlugin()],

    mode: 'development',

    // import _ from 'lodash';
    // console.log(_.head([1, 2, 3]));
    externalsType: 'script',
    externals: {
        lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js', '_'],
    }
}