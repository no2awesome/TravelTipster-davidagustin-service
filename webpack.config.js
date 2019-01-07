let path = require('path');
let SRC_DIR = path.join(__dirname, '/client/src');
let DIST_DIR = path.join(__dirname, '/client/dist');
let combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`, // starting point
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ]),
      },
    ]
  }
};
