## setState是同步还是异步的

```
setState不是真异步，而是看上去是异步的，在源码中通过isBacthingPudates判断真异步还是同步。

异步更新： 在钩子函数和react合成事件中（onClick...)
          
          1.调用setState不会立即更新（即不进入更新钩子函数阶段)
          2.当所有组件都 componentDidMount()后，父组件componentDidMount，然后执行更新阶段
          3.更新时会把每个组件的更新合并，每个组件只会触发一次更新的生命周期。
同步更新： 原生事件中（addEventListener， setTimeout setInterval）
```