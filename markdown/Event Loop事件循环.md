>事件循环： 是指浏览器或node的一种解决js单线程运行时不会阻塞的机制，也就是使用 异步 的原理

```
浏览器的事件循环分为同步任务和异步任务,所有同步任务在主线程上执行，形成一个执行栈，异步则放在任务队列（宏任务与微任务）中，
```

```
任务队列(taskqueye):宏队列和微队列
宏队列（macro-task)： 
script(整体代码)
setTimeout
setInterval
setImmediate (Node独有)
requestAnimationFrame (浏览器独有)
I/O
UI rendering (浏览器独有)

(Promise 新建后立即执行，then是异步微任务)

微队列(micro-task)
process.nextTick(Node独有)
promise.then/promise.catch
Object.observe
MutationObserver

```


```
执行流程：
先从script 整体代码开始第一次循环执行，先执行同步代码（也算宏任务)，知道执行栈被清空， ----执行第一层的微任务----执行宏任务---微任务---....
```