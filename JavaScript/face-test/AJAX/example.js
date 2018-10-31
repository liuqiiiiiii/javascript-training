<script language = "javascript" type = "text/javascript">
  var xmlHttpRequrest;
  function creatXMLHttpRequest()
  {
    if(window.activeXObject) {
      xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest) {
      xmlHttpRequest = new xmlHttpRequest();
    }
  }
</script>

<script>

  xmlHttpRequest.onreadystatechange = getData;
  function getData() {
    if(xmlHttpRequest.readyState == 4) {
      //设置获取数据的语句
    }
  }
</script>

<script>
    }
    xmlHttpRequest.onreadystatechange = getData;
    function getData() {
      if(xmlHttpRequest.readyState == 4) {
        if(xmlHttpRequest.status == 200||xmlHttpRequest.status == 0){
          document.write(xmlHttpRequest.responseText);
          // document.write(xmlHttpRequest.responseXML);
        }
      }
    }
</script>