/*function Fnode() {}
Fnode.prototype.x = 1;

var obj = new Fnode();
obj.z = 3;
//obj.x = 4;
console.log(typeof obj.toString());
console.log(obj.x);
//console.log(obj.prototype.x);    出错，显示没有此属性，因为在obj中添加x后不会再去原型链中查找x
console.log(obj);*/

/*var obj = Object.create({x: 1});
console.log(typeof obj.toString);*/

var val = "10";
val = +val;
console.log(typeof val);
