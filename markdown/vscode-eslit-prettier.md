### eslint和prettier 在vscode使用配置

https://blog.csdn.net/weixin_64051447/article/details/128262929



```
 eslint 

// 开启eslint检查
"eslint.enable": true,

// 自动保存格式化,不需要使用 "editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},



```


```
 prettier 
 //Prettier插件获取配置文件有一个优先级：.prettierrc > .editorconfig > vscode默认配置。

 //自动格式化，即启用prettier自动格式化 需要"editor.formatOnSave": true,不然右键手动格式化。使用eslit自动格式化不需要为true，使用editor.codeActionsOnSave->source.fixAll.eslint
 "editor.formatOnSave": true,

 //默认格式化工具
 "editor.defaultFormatter": "esbenp.prettier-vscode",

 //需要prettier的配置文件,如果设置了这个，然后目录中没有.prettierrc或.editorconfig中的一个或者两个同时存在，否则代码保存不会进行格式化。
 "prettier.requireConfig": true,
 

 .prettierrc和.editorconfig同时存在时，二者内容会进行合并，若配置项有冲突，这.prettierrc的优先级更高。

```


```
 prettier和eslint 配置冲突的时候

当 "editor.formatOnSave": true, prettier开启 和eslint也开启 配置冲突的时候

Prettier的格式化耗时 > ESLint的格式化耗时，所以最后会使用prettier 的


解决，在使用ESLint作为代码的格式化工具时，关闭可能与Prettier有冲突的格式化规则，把Prettier当做一个linter规则。
主要是使用下面两个包：

eslint-config-prettier 会关闭ESLint中有关代码格式化的配置，具体参考这里。
eslint-plugin-prettier 把Prettier配置成ESLint的一个插件，让其当做一个linter规则来运行，可参考其官网。

这样配置后，ESLint进行格式化时就会忽略跟Prettier重叠的格式规则，这些交由Prettier来进行格式化，这样二者可以愉快地一起分工协作了

```

```
Prettier在代码格式化方面的优劣:

优势：可以对多种语言进行代码格式化，不仅仅是javascript
劣势：不具备代码质量检查的能力


"editor.formatOnSave": true和"editor.defaultFormatter": "esbenp.prettier-vscode"配置，告诉vscode在文件保存时都使用默认的Prettier来对代码格式化。

而editor.codeActionsOnSave.source.fixAll.eslint: true设置代码保存时使用ESLint来进行格式化。

因为方案一本质上执行了两次代码格式化，所以我们可以有另一种思考：只使用二者中的一个进行代码格式化。

```

```
总结： 为了统一团建写法，应该：
eslint 关闭ESLint中有关代码格式化的配置，prettier作为eslint插件，这样避免配置冲突，
prettier 格式化，eslint做代码检查


```
settings.json
{
  //自动格式化，即启用prettier自动格式化 需要"editor.formatOnSave": true,不然右键手动格式化。使用eslit自动格式化不需要为true，使用editor.codeActionsOnSave->source.fixAll.eslint
  "editor.formatOnSave": false,
  //需要prettier的配置文件,如果设置了这个，然后目录中没有.prettierrc或.editorconfig中的一个或者两个同时存在，否则代码保存不会进行格式化。
  //Prettier插件获取配置文件有一个优先级：.prettierrc > .editorconfig > vscode默认配置。
  "prettier.requireConfig": true,
  //默认格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "workbench.colorTheme": "Atom One Dark",
  "security.workspace.trust.untrustedFiles": "open",
  "eslint.lintTask.enable": true,
  "files.eol": "\n",
  "eslint.alwaysShowStatus": true,
  //开启eslint检查
  "eslint.enable": true,
  //保存格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.fontLigatures": false,
  "eslint.codeActionsOnSave.rules": null,
  // 禁止空包折叠，JAVA适用
  "explorer.compactFolders": false,
  "cssrem.vw": true,
  "cssrem.wxssDeviceWidth": 750,
  "cssrem.vwDesign": 375
}
