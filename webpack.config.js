var MiniCssExtractPlugin = require("mini-css-extract-plugin")
var PurgecssPlugin = require('purgecss-webpack-plugin')
var glob = require('glob')
var path = require('path')

/**
 * Custom PurgeCSS extractor for Tailwind that allows special characters in
 * class names.
 *
 * https://github.com/FullHuman/purgecss#extractor
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = function (env, argv) {
  var isProduction = argv.mode === 'production';

  return {
    entry: './_assets/js/index.js',
    output: {
      path: path.resolve(__dirname, '_site/dist'),
      publicPath: '/dist/'
    },
    devServer: {
      contentBase: path.resolve(__dirname, '_site'),
      publicPath: '/dist/',
      open: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: isProduction
              }
            },
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
        paths: glob.sync('_site/**/*.html'),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'php', 'vue']
          }
        ]
      })
    ]
  }
}
