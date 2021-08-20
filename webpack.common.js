const HtmlWebpackPlugin = require('html-webpack-plugin');// eslint-disable-line import/no-extraneous-dependencies
const WebpackLighthousePlugin = require('webpack-lighthouse-plugin');// eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
  }), new WebpackLighthousePlugin({
    url: 'http://localhost:9001'
  })],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

};
