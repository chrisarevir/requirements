const webpack = require('webpack');
const path = require('path');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';

  const output = prod
    ? { path: `${__dirname}/build/`, filename: '[name].js', libraryTarget: 'umd' }
    : { path: '/', publicPath: 'http://localhost:5000/', filename: '[name].js', libraryTarget: 'umd' };

  const htmlPlugin = new HtmlWebpackPlugin({
    title: 'Stage Me',
    template: './index.html'
  });

  const webAppManifestPlugin = new WebpackPwaManifest({
    'theme-color': '#00ced1',
    background_color: '#00ced1',
    description: 'Testing is important',
    display: 'standalone',
    icons: [{
      src: path.resolve('src/assets/icon.png'),
      sizes: [16, 24, 32, 48, 64, 96, 128, 256, 512]
    }],
    name: 'Require Me',
    short_name: 'Require Me',
    start_url: '/', // TODO: Put to the right place
    theme_color: '#00ced1',
    viewport: 'width=device-width, initial-scale=1'
  });

  const plugins = prod
    ? [
      htmlPlugin,
      new SWPrecacheWebpackPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        exclude: [/\.min\.js$/gi],
        compress: {
          pure_getters: true,
          screw_ie8: true,
          unsafe_comps: true,
          unsafe: true,
          warnings: false
        },
        mangle: true,
        output: { comments: false },
        sourceMap: false
      }),
      webAppManifestPlugin
    ] : [
      htmlPlugin,
      new FriendlyErrorsWebpackPlugin(),
      new SWPrecacheWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin({ alwaysNotify: false }),
      webAppManifestPlugin
    ];

  return {
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      host: '0.0.0.0',
      hot: true,
      port: 5000
    },

    devtool: 'eval',

    entry: './src/index.js',

    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true
          }
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: [path.resolve(__dirname, 'src')]
        },
        {
          test: /\.s?[ca]ss$/,
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { importLoaders: 1 } },
            { loader: 'postcss-loader' }
          ]
        },
        {
          test: /.*\.(gif|png|jpe?g)$/i,
          use: [
            { loader: 'file-loader' }
          ]
        }
      ]
    },

    output,

    plugins,

    resolve: { extensions: ['.js', '.jsx', '.css', '.scss'] }
  };
};
