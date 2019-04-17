var p = new Promise(function(resolve, reject){
  // 做一些异步操作
  setTimeout(function(){
    console.log('执行完成');
    resolve('随便什么数据');
  },6000);
});

// 在上面的代码中，我们执行了一个异步操作，也就是setTimeout，6秒后，输出“执行完成”，并且调用resolve方法。
// 运行代码，会在2秒后输出“执行完成”。注意！我只是new了一个对象，并没有调用它，我们传进去的函数就已经执行了，这是需要注意的一个细节。
// 所以我们用 Promise 的时候一般是包在一个函数中，在需要的时候去运行这个函数，如：

function runAsync() {
  var p = new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('执行完成');
      resolve('随便什么鸡鸡');
    },7000);
  });
  return p;
}

runAsync();

runAsync().then(function(data){
  console.log(data);
  //后面可以用传过来的数据做些其他操作
  //......
})

// 在runAsync()的返回上直接调用 then 方法，then 接收一个参数，是函数，并且会拿到我们在 runAsync 中调用 resolve 时传的的参数。
// 运行这段代码，会在2秒后输出“执行完成”，紧接着输出“随便什么鸡鸡”。
