import * as path from 'path';
import { Configuration } from 'webpack';
import { templateConfig } from './src/templateConfig';

const config: Configuration = {
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
};

export default config;
