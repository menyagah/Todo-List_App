const path = require('path');
const { merge } = require('webpack-merge');// eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'dist'),
  },

});
