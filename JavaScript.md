# 循环
```
// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}
```
# 函数声明
- 在函数声明被定义之前，它就可以被调用。
```
sum(1,2);
function sum(a, b) {
  return a + b;
}
```
# 函数表达式
- 函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。
```
sayHi();//不允许
let sayHi = function() {
  alert( "Hello" );
};
```
# 匿名函数
- 没有名字的函数
# 回调函数
ask的两个参数是回调函数，同时是匿名函数
```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```
- 回调地狱，不断回调下去
- 有点类似与反射机制，可以给回调函数传不同的函数
## Promise
- js中都是异步函数，但是需要在一个函数执行结果返回后再执行一些处理语句。相当于在异步调用的情况下，增加同步调用。
- 可以理解为一种执行异步函数时，对执行结果处理的规范（使用回调函数），规范了处理*正常*和*异常*的函数。
- resolves在返回任务成功后执行，reject在返回失败后执行。
```
function loadScript(src) {
     return new Promise(function(resolve, reject) {
       let script = document.createElement('script');
       script.src = src;
       //定义处理正常的代码
       script.onload = () => resolve(script);
       //定义处理异常的代码，都是约定好的
       script.onerror = () => reject(new Error(`Script load error for ${src}`));
     });
   }
```
- promise和callback的区别
  - promise 允许我们按照自然顺序进行编码。首先，我们运行 loadScript 和 .then 来处理结果。*promise可以跟着多个then*。	
  - 在调用函数时，我们必须有一个 callback 函数可供使用。换句话说，在调用函数之前，我们必须知道如何处理结果。*回调函数只能有一个*。
- promise链
  - then、catch、finally
  - 如果我们需要确保一段代码在 .then/catch/finally 之后被执行，我们可以将它添加到链式调用的 .then 中。
- promise6中方法
  - Promise.all(promises) —— 等待所有 promise 都 resolve 时，返回存放它们结果的数组。如果给定的任意一个 promise 为 reject，那么它就会变成 Promise.all 的 error，所有其他 promise 的结果都会被忽略。
  - Promise.allSettled(promises)（ES2020 新增方法）—— 等待所有 promise 都 settle 时，并以包含以下内容的对象数组的形式返回它们的结果：
     status: "fulfilled" 或 "rejected"
     value（如果 fulfilled）或 reason（如果 rejected）。
  - Promise.race(promises) —— 等待第一个 settle 的 promise，并将其 result/error 作为结果返回。
  - Promise.any(promises)（ES2021 新增方法）—— 等待第一个 fulfilled 的 promise，并将其结果作为结果返回。如果所有 promise 都 rejected，Promise.any 则会抛出 AggregateError 错误类型的 error 实例。
  - Promise.resolve(value) —— 使用给定 value 创建一个 resolved 的 promise。
  - Promise.reject(error) —— 使用给定 error 创建一个 rejected 的 promise。
- **对函数进行promise改造**：promisification 函数的模块（module），例如 es6-promisify。在 Node.js 中，有一个内建的 promise 化函数 util.promisify
## async/await
- async修饰的函数返回的是Promise
- await只能在async修饰的函数内工作：让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。**await的作用是等待**。
# 箭头函数
```
//函数简化为：参数 => 函数体
() => {}
//1. 参数为空
() => alert("Hello!");
//2. 一个参数
let double = n => n * 2;
```
