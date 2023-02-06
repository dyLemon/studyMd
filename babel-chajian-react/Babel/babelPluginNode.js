module.exports = function (babel) {
    return {
      visitor: {
          JSXText(path, state) {
              const {node}=path
              node.value="demo"
              path.skip()
        },
        // VariableDeclarator 是要找的变量声明
        // VariableDeclarator(path, state) {
        //   console.log('dd');
        //   if (path.node.id.name == "a") {
        //     // 方式一：直接修改name
        //     path.node.id.name = "b";
        //     // 方式二：把id是a的ast换成b的ast
        //     // path.node.id = t.Identifier("b");
        //   }
        // },
      },
    };
  };
  