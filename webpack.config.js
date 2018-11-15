const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output:{
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader", // or just "babel"
          query: {
              presets: ['es2015', 'stage-0']
          }
      }
    ]
  }
};

