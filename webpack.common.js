const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [{
    name: 'browser',
    entry: {
        polyfill: 'babel-polyfill',
        index: './src/index.js'
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-syntax-dynamic-import"]
                      }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
          }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Tastiest news',
            template: 'src/index.html'
        })
    ],
}];

// use: [
//     {
//         loader: 'style-loader'
//     },
//     {
//         loader: 'css-loader'
//     },
//     {
//         loader: 'resolve-url-loader'
//     },
//     {
//         loader: 'sass-loader',
//         options: {
//             includePaths: ["absolute/path/a", "absolute/path/b"]
//         }
//     }
// ]