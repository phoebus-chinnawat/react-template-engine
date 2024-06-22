import * as path from 'path';
import { Configuration } from 'webpack';
import { templateConfig } from './src/templateConfig';

const config: Configuration = {
  entry: {
    [templateConfig.mui.script]: './src/client/templates/mui/index.tsx',
    [templateConfig.mui.previewScript]: './src/client/Editor/templates/mui.tsx',
    [templateConfig.tailwind.script]: './src/client/templates/tailwind/index.tsx',
    [templateConfig.tailwind.previewScript]: './src/client/Editor/templates/tailwind.tsx',
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
