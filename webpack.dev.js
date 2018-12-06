const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = common.map(cmn => merge(cmn,   {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/dist/index.html',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}));