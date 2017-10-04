const path = require("path");
const webpack = require("webpack");
const jsxControl = require("jsx-control-statements");

module.exports = {
  devtool: "eval",
  cache: true,
  context: path.join(__dirname, "src"),
  entry: {
    // dynamically add by server.js
  },
  output: {
    path: path.join(__dirname, "build/static"),
    filename: "[name].bundle.js",
    publicPath: "/static"
  },
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: '"dev"',
      //default: online api path, if you want run with local env pas your local path with npm start command.
      //Ex: `npm start local path`
      __API__: JSON.stringify("https://pipelineapi.refinepro.com"),
      "process.env": {
        NODE_ENV: JSON.stringify("dev")
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|build/,
        loader:
          "babel-loader?cacheDirectory=true&plugins=jsx-control-statements"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
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
