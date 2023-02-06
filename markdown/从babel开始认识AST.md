### babel核心 AST

https://www.shuzhiduo.com/A/D854A6ZpdE/

#### AST抽象语法树

```
在很多地方都能看见AST抽象语法树的影子，其中不乏有vue、react、babel、webpack、typeScript、eslint等。简单来说但凡需要编译的地方你基本都能发现AST的存在。

AST语法抽象树 ：工具AST Explorer( https://astexplorer.net/)

babel的编译流程： 
    parse：将源代码编译成AST语法树
    transform： 在AST语法树中按照需要的做修改改造
    generator： 用于将改造后的AST抽象语法树转换成目标代码

so: 通过对AST的操作，达到源代码到目标代码的转换过程，这将会比暴力使用正则匹配要优雅的多

```

#### AST是如何生成的

```
一般都需要js解析器来完成：
JavaScript解析器通常可以包含四个组成部分：

词法分析器（Lexical Analyser）：
对代码字符串进行扫描，比如let const function,运算符（+，-），数字，标点（( => = {}....）等，生成对应的token,最终是个数组对象
[
    {
        "type": "Keyword",
        "value": "let"
    },
    {
        "type": "Identifier",
        "value": "fn"
    },
    {
        "type": "Punctuator",
        "value": "="
    },
    {
        "type": "Punctuator",
        "value": "("
    },]

语法解析器（Syntax Parser）:产生的token转换成ast,最后是个对象{}

```

#### 注意 (https://juejin.cn/post/6918927987056312327)
```
vite 使用的esbuild 构建工具，内置loader， esbuild 只能将代码转成 es6 jsx-》js ,或者自定义esbuild 插件,而不是使用babel 
 
 Esbuild 不通过转为ast语法树 ，babel要编译成编译，Esbuild构建快

为什么快？
1.js是单线程串行，esbuild是新开一个进程，然后多线程并行，充分发挥多核优势
2.是go语言写的
3.不适AST,优化了编译流程

缺点： 为了保证 esbuild 的编译效率，esbuild 没有提供 AST 的操作能力，所以一些通过AST处理代码的babel插件没有办法过度到esbuild中,

Babel编译,一般需要配合 Webpack 来编译模块语法
```

```
babel在项目中使用  https://juejin.cn/post/6844903889716641800
即修改底层配置对象 webpack，webpack-dev-server，babel等）
customize-cra利用react-app-rewired的config-overrides.js文件，通过导入cra 出口函数调用我们的override功能 

react-app-rewired是用来帮助重写react脚手架配置的
```