<sctipt>
  var data = new Object;

  data.id = document.getElementById('id').value;
  data.name = document.getElementById('name').value;
  data.sex = document.getElementById('sex').value;
  data.age = document.getElementById('age').value;

  var str = JSON.stringify(data);

  localStorage.setItem(data.name,str);
  alert("数据已保存");

  localStorage.setItem("name","刘琦");
  localStorage.setItem("age","23");

  var data = localStorage.getItem("name");
  alert("data"); // 刘琦

  var data = localStorage.removeItem("age");
  alert("age"); //undefine

  localStorage.clear();
</sctipt>
