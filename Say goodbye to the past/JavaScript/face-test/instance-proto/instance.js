function CreatObject (name,age) {
  this.name = name;// 实例属性
  this.age = age;
  this.run = function() {// 实例方法
    return this.name + this.age;
  }
}

var box1 = new CreatObject('liuqi',23);
var box2 = new CreatObject('liuqi',23);

console.log(box1.age == box2.age);// true
console.log(box1.run() == box2.run());// true
console.log(box1.run == box2.run);// false 比较的是引用地址

// 如何让 box1 和 box2 的地址一样呢？使用冒充。
var qiliu = new Object();
Box.call(qiliu,'life',200);
console.log(qiliu,run());
