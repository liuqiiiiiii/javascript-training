function CreatObject() {};
CreatObject.prototype.name = 'liuqi';
CreatObject.prototype.age = 23;
CreatObject.prototype.run = function() {
  return this.name + this.age;
}

var CreatObject1 = new CreatObject();
var CreatObject2 = new CreatObject();

console.log(CreatObject1.run == CreatObject2.run);// true
console.log(CreatObject1.prototype);// 这个属性是个对象，无法访问
console.log(CreatObject1._proto_);// 这个对象是个指针，指向 prototype 原型对象
console.log(CreatObject.constructor);// 构造属性

// 如果我们在CreateObject1 添加自己属性呢？例如
CreatObject1.name = 'liuqi';
console.log(CreatObject1.name);

// 可以使用 delete 删除实例属性和原型属性
delete CreatObject1.name;
delete CreatObject1.prototype.name;
