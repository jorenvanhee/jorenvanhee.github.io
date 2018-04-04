var MiniCssExtractPlugin = require("mini-css-extract-plugin")
var PurgecssPlugin = require('purgecss-webpack-plugin')
var glob = require('glob')
var path = require('path')

module.exports = function (env, argv) {
  var isProduction = argv.mode === 'production';

  return {
    entry: './_assets/js/index.js',
    output: {
      path: path.resolve(__dirname, '_site/dist'),
    },
    devServer: {
      contentBase: path.resolve(__dirname, '_site'),
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'app.css'
      }),
      new PurgecssPlugin({
        paths: glob.sync('_site/**/*.html')
      })
    ]
  }
}
