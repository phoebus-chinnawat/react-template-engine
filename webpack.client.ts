import { Configuration } from 'webpack';
import * as path from 'path';
import script from './src/templateConfig.json';

const config: Configuration = {
  entry: {
    [script.muiTemplate.script]: './src/client/templates/mui/index.tsx',
    [script.muiTemplate.previewScript]: './src/client/Editor/templates/mui.tsx',
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
    ],
  },
};

export default config;
