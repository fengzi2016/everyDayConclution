const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
 module.exports = {
     entry:{
         app:'./src/index.js',
        // print: './src/print.js'
    },
    devtool:'inline-source-map',
    devServer: {
        //在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
        contentBase: './dist',
        hot:true
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        //模块热替换
        new webpack.NamedModulesPlugin(), //以便更容易查看要修补(patch)的依赖
       
        new webpack.HotModuleReplacementPlugin()
    ],
     output:{
         filename:'[name].bundle.js',
         path: path.resolve(__dirname,'dist')
     },
     mode:"product", //自动开启UglifyJSPlugin
     module : {
         rules: [
             {
                 test: /\.css$/,
                 use: [
                     'style-loader',
                     'css-loader'
                 ]
                 //这使你可以在依赖于此样式的文件中 import './style.css'。
                 //现在，当该模块运行时，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中。
             },
             //file-loader 和 url-loader可以处理任何类型的文件，包括字体文件
             {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
             },
             {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1, //超过1bite返回base64
                    name: "img/[name].[hash:7].[ext]"
                }
             },
             //用xml-loader和csv-loader处理JSON 文件，CSV、TSV 和 XML
             {
                 test: /\.(csv|tsv)$/,
                 use:[
                     'csv-loader',
                 ]
             },
             {
                 test:/\.xml$/,
                 use: [
                     'xml-loader'
                 ]
             }
         ]
     }
 }