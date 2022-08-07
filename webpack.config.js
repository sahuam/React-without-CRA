const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "/src/index.js",
  target: "web",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    // publicPath: "public/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    port: "3000",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      path: path.join(__dirname, "src/index.js"),
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
