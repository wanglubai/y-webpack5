const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    // import _ from 'lodash';
    // console.log(_.head([1, 2, 3]));
    entry: {
        lodash: ['lodash'],
        index: { import: './index.js', dependOn: "lodash" },
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
}