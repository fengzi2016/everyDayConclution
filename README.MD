# 使用webpack过程
1. 用style-loader 和css-loader 会将css代码通过 < style >标签插入到对应的页面中head内去
2. 用file-loader，当你 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，并且 MyImage 变量将包含该图像在处理后的最终 url;loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为输出目录中图像的最终路径， 其将会处理 css中的url('./my-image.png')。
3. 用html-loader以同样方式处理 < img src="./my-image.png" />。
4. 某jpg文件 ： module.exports = **__webpack_public_path__ + "img/icon.2758ec9.jpg";**
5. 如果两个Loader匹配到同一个文件，则会生成2个对应的结果造成空间浪费
6. HtmlWebpackPlugin 是用来生成dist里面的html文件的
7. clean-webpack-plugin 用来清理dist中的上一次build的遗留文件
8. inline-source-map 版主追踪错误和警告，将编译后的代码映射会原始源代码
9. webpack --watch观察模式：如果其中一个文件被更新，代码将被重新编译,但不会自动刷新浏览器
10.  webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading);注意版本问题
11. style-loader可以实时刷新css文件，HMR（模块热替换）可以实时更新JS模块变化
12. 删除未使用代码：
package.json:
```js
    {
        "name":"your-project",
        "sideEffects":false
        //如果有副作用，可以为一个路径数组，防止被无意中删除
    }
```
13. 从 webpack 4 开始，也可以通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"。
14. ExtractTextPlugin 分解CSS成单独的模块
15. 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
16. 一些对于代码分离很有帮助的插件和 loaders：

ExtractTextPlugin: 用于将 CSS 从主应用程序中分离。

bundle-loader: 用于分离代码和延迟加载生成的 bundle。

promise-loader: 类似于 bundle-loader ，但是使用的是 promises。

CommonsChunkPlugin 插件还可以通过使用显式的 vendor chunks 功能，从应用程序代码中分离 vendor 模块。
17. 懒加载，一个交互，当用户点击按钮的时候用 console 打印一些文字。但是会等到第一次交互的时候再加载那个代码块（print.js）
18. output里的name + hash 是为了利用缓存，且即使更新
19. new webpack.optimize.CommonsChunkPlugin能够在每次修改后的构建结果中，将 webpack 的样板(boilerplate)和 manifest 提取出来
20. main bundle 会随着自身的新增内容的修改，而发生变化。vendor bundle 会随着自身的 module.id 的修改，而发生变化。manifest bundle 会因为当前包含一个新模块的引用，而发生变化。new webpack.HashedModuleIdsPlugin(),将使用模块的路径，而不是数字标识符 来使vender不会每次都改变。现在，不管再添加任何新的本地依赖，对于每次构建，vendor hash 都应该保持一致：

21.  //通过插件的形式来引用包
     new webpack.ProvidePlugin({
       _:'lodash'
     }),
    // 引入某个模块单个导出值
    new webpack.ProvidePlugin({
       join:['loadsh','join']
     }),
22. 解决CommonJS中函数this指向 module.exports问题，用imports-loader
23. 使用 exports-loader，将一个全局变量作为一个普通的模块来导出。
24. 离线环境：渐进式网络应用程序PWA ，http-server,添加Workbox插件，调整webpack.common文件