const path = require("path");
const webpack = require("webpack");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const jsxControl = require("jsx-control-statements");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var argv = require("yargs").argv;

module.exports = {
  devtool: false,
  context: path.join(__dirname, "src"),
  entry: {
    main: ["babel-polyfill", "./index"]
  },
  output: {
    path: path.join(__dirname, "build/static"),
    filename: "[name].bundle.js",
    publicPath: "/static/"
  },
  plugins: (function(argv) {
    console.log("Building app with api = " + argv.api);
    var plugins = [
      new LodashModuleReplacementPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CopyWebpackPlugin([{ from: "static-assets", to: "../" }]),
      new webpack.DefinePlugin({
        ENV: '"dist"',
        __API__: JSON.stringify(argv.api),
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ];
    return plugins;
  })(argv),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader?plugins=jsx-control-statements"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      }
    ]
  }
};
