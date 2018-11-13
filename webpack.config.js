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
    ]
  },
};

