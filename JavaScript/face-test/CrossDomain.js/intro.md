# 什么是跨域？

由于浏览器的同源策略，凡是发送请求的 url 协议、端口、域名，这三者中任意一个与当前页面地址不同即为跨域。
存在跨域的情况有以下几种：
网络协议不同：http\https
端口不同：80/8080
域名不同：www.bilibili.com到www.baidu.com
子域名不同：www.abc.liuqi.com 和 www.def.liuqi.com
域名和域名对应 ip：www.bili.com 访问 11.222.33.44

## 跨域请求资源的方法

1. proxy 代理

定义和用法：proxy代理用于将请求发送给后台服务器，通过服务器来发送请求，然后将请求的结果传递给前端。
实现方法：通过nginx代理；
注意点：如果你代理的是https协议的请求，那么你的proxy首先需要信任该证书（尤其是自定义证书）或者忽略证书检查，否则你的请求无法成功。
2. CORS

定义和用法：是现代浏览器支持跨域资源请求的一种最常用的方式。
使用方法：一般需要后端人员在处理请求数据的时候，添加允许跨域的相关操作。如下：

```js
  res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
      "Access-Control-Allow-Origin":'http://localhost',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type'
  });
```

3. JSONP

定义和用法：通过动态插入一个script标签。浏览器对script的资源引用没有同源限制，同时资源加载到页面后会立即执行（没有阻塞的情况下）。
特点：通过情况下，通过动态创建script来读取他域的动态资源，获取的数据一般为json格式。
实例如下：

```js
  <script>
    function testjsonp(data) {
      console.log(data.name); //获得返回的结果
    }
  </script>
  <script>
    var iscript = document.createElement('script');
    script.type = text/javascript;
    script.src = "www.asdflasjfl.com";
    document.head.appendChild(script);
  </script>
```
