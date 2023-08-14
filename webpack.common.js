const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  return {
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: `[name]${env.WEBPACK_SERVE ? '' : '.[contenthash]'}.js`,
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        lang: 'en',
        title: 'Arepa Bistro',
        favicon: '',
        template: './src/index.html',
        filename: `[name].html`,
      }),
      new MiniCssExtractPlugin({
        filename: `[name]${env.WEBPACK_SERVE ? '' : '.[contenthash]'}.css`,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
  }
};
