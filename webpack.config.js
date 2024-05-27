const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //入口文件配置
  entry: "./src/index.js",
  //出口文件配置
  output: {
    //出口文件夹
    path: path.resolve(__dirname, "./dist"),
    //出口文件
    filename: "main.js",
  },
  //模式
  mode: "production",
  //loader加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb以下的图片会被打包成base64格式
          },
        },
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  //plugin插件
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/main.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/public",
          to: "public",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
