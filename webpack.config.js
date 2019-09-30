const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const webpackUltraCreditos = {
  entry: ["./src/index.js"],
  output: {
    filename: "frontend-ucr.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "module:metro-react-native-babel-preset",
              "@babel/preset-flow"
            ],
            plugins: [
              ["@babel/plugin-transform-object-assign"],
              ["@babel/plugin-proposal-decorators", { legacy: true }, "emotion"]
              /* ['transform-remove-console'], */
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devtool: "source-map",
  devServer: {
    port: 8085,
    hot: true,
    allowedHosts: ["local.ultracreditos.com", "betalocal.ultracreditos.com"]
  },
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env.YASTA_ENV': JSON.stringify('PRODUCTION'),
      "process.env.YASTA_ENV": JSON.stringify("LOCAL")
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new Dotenv()
  ]
};

module.exports = [webpackUltraCreditos];
