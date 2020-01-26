const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "index.html") })
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ["babel-loader"]
      }
    ]
  },
  devServer: {
    port: 3600,
    hot: true
  }
};
