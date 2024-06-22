import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { templateConfig } from './src/templateConfig';

const config: Configuration & DevServerConfiguration = {
  mode: 'development',
  entry: {
    [templateConfig.mui.script]: './src/client/templates/mui/index.tsx',
    [templateConfig.mui.previewScript]: './src/client/templates/mui/preview.tsx',
    [templateConfig.tailwind.script]: [
      './src/client/templates/tailwind/index.tsx',
      './src/client/styles/tailwind.css',
    ],
    [templateConfig.tailwind.previewScript]: [
      './src/client/templates/tailwind/preview.tsx',
      './src/client/styles/tailwind.css',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/templates/mui/index.html',
      filename: 'mui.html',
      chunks: [templateConfig.mui.script],
    }),
    new HtmlWebpackPlugin({
      template: './src/client/templates/mui/preview.html',
      filename: 'mui-preview.html',
      chunks: [templateConfig.mui.previewScript],
    }),
    new HtmlWebpackPlugin({
      template: './src/client/templates/tailwind/index.html',
      filename: 'tailwind.html',
      chunks: [templateConfig.tailwind.script],
    }),
    new HtmlWebpackPlugin({
      template: './src/client/templates/tailwind/preview.html',
      filename: 'tailwind-preview.html',
      chunks: [templateConfig.tailwind.previewScript],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },
};

export default config;
