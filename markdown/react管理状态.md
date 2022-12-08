 ### 全局状态管理： useContext 获取createContext创建的上下文  配合使用
```
react 内置的useContext Hooks 读取从父级组件传递到底层的props

使用：     
  使用createContext 创建一个上下文对象，用useContext获取共享下来的数据

1) 新建一个文件context.ts,使用createContext创建一个自己的上下文，相当于开辟一个空间，可以配置默认参数，支持任何类型

  import { createContext } from "react"
  export  const C = createContext(null)
  //export  const C = createContext({a:1}) 

2) 在父级组件引入创建的仓库，所有的组件都可以使用传入的参数
  
  //Provider提供的数据（方法）共享 ，传参使用value ，必填
  import { C } from '@/connect'
  <C.Provider value={{num,setNum}}>
    <Son1></Son1>
    <Son2></Son2>
  </C.Provider>

 3) 子组件通过useContext获取仓库的值
  import React, { useContext } from 'react';
  import { C } from '@/connect'
  const { num, setNum } = useContext(C); //传入的对象 解构
   

  注：如果需要频繁的使用context来处理状态，就建议使用redux mobx
```

### Redux-toolkit 

```
是我们官方推荐的编写 Redux 逻辑的方法,
在一般的React项目中，大多数情况会选择Redux或者React-Redux作为我们的状态管理工具，在使用Vuex的时候，我们可以在mutations里写同步操作，也可以在actions里写异步操作，然而Redux不同于Vuex，Redux本身是不支持异步的，如果需要处理异步操作，我们还要额外安装redux-thunk或者redux-saga这样的中间件，显得很繁琐

Redux-toolkit  不需要这些中间件


```


### valtio  (https://github.com/pmndrs/valtio)