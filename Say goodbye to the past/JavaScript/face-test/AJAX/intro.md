# AJAX 的实现步骤

AJAX 全称为“Asynchronous JavaScript and XML”（异步 JavaScript 和 XML），是一种创建交互式网页应用的网页开发技术。Ajax 的工作原理相当于在用户和服务器之间加了—个中间层(AJAX 引擎),使用户操作与服务器响应异步化。并不是所有的用户请求都提交给服务器,像—些数据验证和数据处理等都交给 Ajax 引擎自己来做, 只有确定需要从服务器读取新数据时再由 Ajax 引擎代为向服务器提交请求。

实现一个AJAX异步调用和局部刷新,通常需要以下几个步骤:

1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象
2. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
3. 设置响应HTTP请求状态变化的函数
4. 发送HTTP请求
5. 获取异步调用返回的数据
6. 使用JavaScript和DOM实现局部刷新

```js

<script language = "javascript" type = "text/javascript">
  var xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  // IE 浏览器
  var xmlHttpRequest = new XMLHttpRequest;
  // 其他浏览器

  var xmlHttpRequest;
  // 定义一个变量,用于存放XMLHttpRequest对象
  function creatXMLHttpRequest()
  // 创建XMLHttpRequest对象的方法
  {
    if(window.activeXObject)
    // 判断是否是 IE 浏览器
    {
      xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      // 创建IE浏览器中的XMLHttpRequest对象
    }
    else if(window.XMLHttpRequest)
    判断是否是其他支持 XMLHttpRequest 组件的浏览器
    {
      xmlHttpRequest = new xmlHttpRequest();
      // 创建其他浏览器上的XMLHttpRequest对象
    }
  }
</script>
```

```js
creatXMLHttpRequest();
// 调用创建对象方法
```

综述：如果浏览器既不支持 ActiveX 控件,也不支持 XMLHttpRequest 组件,那么就不会对 xmlHttpRequest 变量赋值。

## 设置当 HttpRequest 对象状态变化时调用的函数，注意函数名后面不要添加小括号

```js
  xmlHttpRequest.onreadystatechange = getData;
  // 定义函数
  function getData() {
    // 判断 XMLHttpRequest 对象的 readyState 属性是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState == 4) {
      //设置获取数据的语句
    }
  }
```

```js
 if(xmlHttpRequst.status == 200) {
    //使用以下语句将返回结果以字符串形式输出
    document.write(xmlHttpRequest.responseText);
    //或者使用以下语句将返回结果以XML形式输出
    //document.write(xmlHttpRequest.responseXML);
  }
  注意：如果HTML文件不是在Web服务器上运行，而是在本地运行，则xmlHttpRequest.status的返回值为0。因此，如果该文件在本地运行，则应该加上xmlHttpRequest.status == 0的判断。
  通常将以上代码放在响应HTTP请求状态变化的函数体内，如以下代码所示：
  //设置当XMLHttpRequest对象状态改变时调用的函数，注意函数名后面不要添加小括号
  xmlHttpRequest.onreadystatechange = getData;
  //定义函数
  function getData()
  {
    //判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState==4)
    {
      //设置获取数据的语句 state=200说明服务器成功响应返回的结果是正确的
      if(xmlHttpRequest.status == 200 || xmlHttpRequest.status == 0)
      {
        //使用以下语句将返回结果以字符串形式输出
        document.write(xmlHttpRequest.responseText);
        //或者使用以下语句将返回结果以XML形式输出
        //docunment.write(xmlHttpRequest.responseXML);
      }
    }
  }
```
