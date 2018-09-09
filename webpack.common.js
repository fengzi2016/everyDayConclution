 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');
 module.exports = {
   entry: {
     app: './src/index.js',
     another:'./src/another-module.js',
     vender:[
       'lodash'
     ]
   },
   plugins: [
     //将使用模块的路径，而不是数字标识符 来使vender不会每次都改变
    new webpack.HashedModuleIdsPlugin(),
     //提取模板,能够在每次修改后的构建结果中，将 webpack 的样板(boilerplate)和 manifest 提取出来 
     new webpack.optimize.CommonsChunkPlugin({
       name:'vendor'
     }),
     //vender 必须在mainfest之前引用
     new webpack.optimize.CommonsChunkPlugin({
       name:'mainfest'
     }),
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Production'
     }),
    //  {
    //   test: /\.js$/,
    //   exclude: /(node_modules|bower_components)/,
    //   use: {
    //       loader: "babel-loader",
    //   }
    // },
    //  new webpack.optimize.CommonsChunkPlugin({
    //    name:'common',//指定公共bundle的名称
    //  })
   ],
   output: {
     filename: '[name].[chunkhash].js',
     chunkFilename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   }
 };