const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: { import: './index.js', filename: '[name]/[name].js', dependOn: 'axios' },
        app: { import: './app.js', filename: '[name]/[name].js', dependOn: 'axios' },
        'axios':['axios'],
    },
    output:{
        clean:true
    },
    plugins:[new HtmlWebpackPlugin()],
    mode: 'development'
}