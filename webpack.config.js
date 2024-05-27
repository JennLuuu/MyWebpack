const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  //plugin插件
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/main.css",
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
