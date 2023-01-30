#### 为什么react需要fiber ，vue不需要？
```
react，调用setState，会自顶向下（父组件和该组件的子组件全部需要渲染）更新组件，而vue 通过Object.defineProperty or vue3的proxy，对数据进行了代理，vue就可以准确知道哪一个数据修改以及该模块需要重新渲染，

react 更新组件，自顶向下。 vue更新组件，通过get、set准确定位到视图

react 因为先天的不足 ，无法精确更新，所以需要react fiber把组件渲染工作切片，而vue基于数据代理，更新粒度很小，没有这个压力；
```

