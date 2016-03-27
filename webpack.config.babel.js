import "babel/polyfill";
import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import postcssCssnext from "postcss-cssnext";

const production = process.argv.includes('-p');
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');
const assets = src+'/assets';

export default {
  entry: {
    index: [src+'/index.js'],
  },
  output: {
    path: dist,
    filename: 'assets/js/build.min.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
    ]
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: src,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          [
            'css-loader',
            'postcss-loader',
          ].join('!')
        ),
      },
      {
        test: /\.(ico|jpe?g|png|gif|svg|webm|mp4)$/,
        loader: 'file-loader?name=[path][name].[ext]&context='+src+'/',
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot|eot\?#.+)$/,
        loader: 'file?name=[path][name].[ext]&context='+src+'/',
      },
      {
        test: /\.(html|txt)$/,
        loader: 'file?name=[path][name].[ext]&context='+src+'/',
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('assets/css/build.min.css'),
  ],
  postcss: function() {
    const webpack = this;
    return [
      postcssImport({
        onImport: (files) => files.forEach(webpack.addDependency),
      }),
      postcssUrl(),
      postcssCssnext({
        browsers: 'last 2 versions',
        features: {
          customProperties: {
            variables: {
              'background'     : 'aliceblue',
              'blue'           : '#39F',
              'red'            : '#F43',
              'gray'           : '#999',
              'btnColor'       : '#FFF',
              'btnBgColor'     : '#000',
              'btnBgColorHover': '#39F',
              'fontSansSerif'  : '"PT Sans", Helvetica, Arial, sans-serif',
              'fontMonospace'  : '"PT Mono", Consolas, Monaco, "Courier New", monospace'
            }
          },
          customMedia: {
            extensions: {
              '--mobile':  'screen and (max-width: 720px)',
              '--tablet':  'screen and (max-width: 1024px)'
            },
            appendExtensions: true
          }
        }
      })
    ];
  },
};