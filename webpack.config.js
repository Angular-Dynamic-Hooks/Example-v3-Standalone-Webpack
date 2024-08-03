import { resolve } from 'path';
import { AngularWebpackPlugin } from "@ngtools/webpack";
import linkerPlugin from "@angular/compiler-cli/linker/babel";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts';

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

export default {
  mode: mode,
  entry: {
    main: './src/main.ts',
    styles: './styles/styles.scss',
  },
  output: {
    path: resolve("./www/assets"),
    publicPath: "/assets/", // Only needed for the webpack dev server
    filename: isProduction ? "[name].[contenthash].js" : "[name].js",
    // Clean folder after every build
    clean: true
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [

      // Note: Angular component (S)CSS files need to be returned as strings by the loader as that is what the Angular compiler expects.
      // Because of this, we have two (S)CSS loaders here: One for Angular components styles and one for all other styles.
      // We differentiate them by the convention that Angular component style files must always end with ".component.(s)css"

      // Parses normal style files, outputs the contents in a separate CSS file
      {
        test: /\.(s[ac]|c)ss$/,
        exclude: /\.component\.(s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // Parses Angular component style files
      {
        test: /\.component\.(s[ac]|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              exportType: 'string'
            },
          },
          'sass-loader'
        ],
      },
      // Angular loaders for webpack: Parses normal Typescript as well as Angular components
      {
        test: /\.[jt]sx?$/,
        loader: "@ngtools/webpack",
      },
      {
        test: /\.[cm]?js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            compact: true,
            plugins: [linkerPlugin],
          },
        },
      },
    ],
  },
  optimization: {
   usedExports: true,
  },
  plugins: [
    new AngularWebpackPlugin({
      tsconfig: "./tsconfig.json"
    }),
    // Removes empty leftover js files from MiniCssExtractPlugin
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[contenthash].css" : '[name].css'
    })
  ]
};