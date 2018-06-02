'use strict';

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const html = (params) => new HtmlWebpackPlugin(params);
const rootDir = (...paths) => path.join(__dirname, '..', ...paths);

module.exports = {
  entry: {
    index: './index.js'
  },
  context: rootDir('src'),
  mode: 'development',
  output: {
    path: rootDir('docs'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: [
    html({
      template: rootDir(`src/index.html`),
      favicon: rootDir(`src/favicon.ico`),
      filename: 'index.html',
      inject: 'body',
      chunks: ['index'],
      inlineSource: '.(js|css)$' // inline all css and js in prod
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(html|svg)$/,
        exclude: /node_modules/,
        loader: 'babel-loader!template-string-loader'
      }
    ]
  }
};
