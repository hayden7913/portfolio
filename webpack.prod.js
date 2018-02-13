const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // module: {
  //   loaders: [
  //     {
  //       test: /(\.scss$|\.css$)/,
  //       loader : ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader'),
  //     },
  //   ],
  // },
  plugins: [
    new CleanWebpackPlugin(['bundle']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // new ExtractTextPlugin('style.css'),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new UglifyJSPlugin({ sourceMap: true }),
  ],
});
