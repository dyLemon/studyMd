##### loader
```
loader是文件加载器，能够加载资源，对文件进行处理，比如编译，压缩等，最终一起打包在文件中
（浏览器只能识别html,css,js，其余文件格式不识别，可以使用loader进行编译成可以识别的）
一个Loader的职责是单一的，只需要完成一种转化。如果一个源文件需要经历多步转化才能正常使用，就通过多个Loader去转化。

手写loader：
loader结构是不是很简单，接收一个参数，并且return一个内容就ok了。

eg: 字符串颠倒

reverse-loader.js

module.exports = function (src) {
  if (src) {
    console.log('--- reverse-loader input:', src)
    src = src.split('').reverse().join('')
    console.log('--- reverse-loader output:', src)
  }
  return src;
}

// loader配置
  module: {
    rules: [
       ...,
      {
        test: /\.txt$/,
        use: [
          './loader/uppercase-loader.js',
          './loader/reverse-loader.js'
        ]
      }
    ]
}
loader的执行顺序是和本身的顺序是相反的

```

#### plugin 插件

```
 对于loader，它就是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss或A.less转变为B.css，单纯的文件转换过程

 手写plugin 可以是一个类，plugin实例中最重要的方法是apply
 class BasicPlugin{
  // 在构造函数中获取用户给该插件传入的配置
  constructor(options) {
  
  }
  
  // webpack 会调用 BasicPlugin 实例的 apply 方法给插件传入 compiler 对象
  apply(compiler) {
    compiler.plugin('compilation', function(compilation) {
    
    })
  }
}

// 导出 Plugin
module.exports = BasicPlugin

```


####  区别
```
webpack本身只能打包commonjs规范的js文件，所以针对css,图片等格式的文件没法打包，需要引入第三方模块进行打包。

loader: 完成了压缩，打包，语言翻译，都会打包在js文件钟
如： 
css-loader和style-loader模块是为了打包css的

babel-loader和babel-core模块时为了把ES6的代码转成ES5

url-loader和file-loader是把图片进行打包的


plugin: 不仅仅局限在打包，资源的加载上，它的功能要更加丰富，从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。
从打包优化和压缩


 常见plugin
 https://juejin.cn/post/6873360407604822029
ignore-plugin：忽略文件
serviceworker-webpack-plugin: 为网页应用增加离线缓存功能
webpack内置UglifyJsPlugin，压缩和混淆代码
ProviderPlugin： 自动加载模块，代替require和import
...



总结：loader 加载编译模块，浏览器可以识别，plugin也可以做，以及可以提高页面性能优化

1.loader运行在打包文件之前（loader为在模块加载时的预处理文件） 
2.plugins在整个编译周期都起作用。
```
