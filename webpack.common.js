var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.(png|jpg|svg|woff|woff2|eot|ttf)(\?[a-z0-9]+)?$/,
      exclude: /node_modules/,
      loaders: ['file-loader'],
    },
  ]},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new webpack.NamedModulesPlugin(),
  ],
  stats: {
    timings: true,
    warnings: true,
    assets: false,
    chunks: false,
    colors: false,
    errorDetails: false,
    hash: false,
    version: false,
  },
};
