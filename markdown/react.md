#### 为什么react需要fiber ，vue不需要？
```
react，调用setState，会自顶向下（父组件和该组件的子组件全部需要渲染）更新组件，而vue 通过Object.defineProperty or vue3的proxy，对数据进行了代理，vue就可以准确知道哪一个数据修改以及该模块需要重新渲染，

react 更新组件，自顶向下。 vue更新组件，通过get、set准确定位到视图

react 因为先天的不足 ，无法精确更新，所以需要react fiber把组件渲染工作切片，而vue基于数据代理，更新粒度很小，没有这个压力；
```


```
更新粒度： 保存数据的细化的级别 ，vue精确到组件级别，react递归render

 react的更新粒度，自顶向下递归render所有子组件（不管子组件有没有变化，所有子组件都重新render一遍），生成虚拟dom，diff算法对比 更新那部分的视图，这个递归叫reconciler

vue的更新粒度，只会精确去收集依赖 在当前组件，因为每个组件都有自己的渲染watcher，生成当前组件的虚拟dom,只掌管当前组件的不会管子组件,


```