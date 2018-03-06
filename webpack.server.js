const path = require('path');
const express = require('express');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const config = require('./webpack.dev');

const app = express()
app.use(express.static('public'))

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.join(__dirname, "public"),
  hot: true,
  historyApiFallback: true,
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
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Dev server running at: ')
  console.log('')
  console.log(chalk.cyan('http://localhost:3000'));
  console.log('')
  console.log('Webpack is compiling...')
});
