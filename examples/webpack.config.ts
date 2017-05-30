import { Configuration } from 'webpack';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';
import { UserefPlugin } from '../libs';
import * as path from 'path';

const option: Configuration = {
  context: __dirname,
  entry: {
    main: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new UserefPlugin(),
  ]
}

export default option;