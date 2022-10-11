const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    site: ["./src/scss/site.scss", "./src/js/site.js"],
  },
  output: {
    path: path.resolve(__dirname, "assets"),
  },
  module: {
    rules: [
    {
      test: /\.js$/, 
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        },
        {
          loader: "css-loader",
          options: {
            url: false
          }
        },
        {
          loader: "postcss-loader"
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  ],
  devtool: 'source-map'
};
