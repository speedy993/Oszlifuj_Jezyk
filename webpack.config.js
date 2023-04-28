const path = require("path");
const webpack = require("webpack");

const entryPath = "todo-app";

module.exports = {
  mode: "none",
  entry: `./${entryPath}/js/index.js`,
  // entry: `./${entryPath}/../src/index.js`,
  devtool: "inline-source-map",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
    clean: true,
  },
  devServer: {
    open: false,
    hot: true,
    static: [
      {
        directory: path.join(__dirname, entryPath),
        publicPath: "/",
        serveIndex: true,
      },
    ],
    devMiddleware: {
      writeToDisk: true,
    },
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env',
                    '@babel/react',{
                    'plugins': ['@babel/plugin-proposal-class-properties']}]

        }
      
      },
      
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: "file-loader",
        options: {
          presets: ['@babel/preset-env',
                    '@babel/react',{
                    'plugins': ['@babel/plugin-proposal-class-properties']}]

        }
      
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
      
      
    ],
  },
  // module: {
  //   loaders: [{
  //     test: /.jsx?$/,
  //     loader: 'babel-loader',
  //     exclude: /node_modules/
  //   }, {
  //     test: /\.css$/,
  //     loader: "style-loader!css-loader"
  //   }, {
  //     test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
  //     loader: 'url-loader?limit=100000' }]
  // },
  //   module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //         loaders: [
  //     { test: /\.css$/, loader: "style-loader!css-loader" },
  //   ],
  //     },
  //   ],
  // },
  // module: {
  //   loaders: [
  //     { test: /\.css$/, loader: "style-loader!css-loader" },
  //   ],
  // },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
