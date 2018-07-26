const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");


const nodeEnv = process.env.NODE_ENV || "development";

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    filename: "./app.js"
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname,'./_build/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [["env", {
            "targets": {
              "browsers": ["last 2 versions", "safari >= 7"]
            }
          }]]
        }
      }
    ]
  },
  plugins: [
    // env plugin
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        exclude: /\/node_modules/
      })
    ]
  }
}
