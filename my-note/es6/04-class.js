class Person {
  // 一般用来做初始化工作，比如给我们的属性赋值
  constructor(name, age) { //没有需要可以不写   相当于es5中的构造函数
    this.name = name;
    this.age = age;
  }
  eat(foodName) { //相当于es5中的原型方法
    console.log(`${this.name} 吃 ${foodName}`);
  }
}

const p1 = new Person();
p1.name = "李亚鹏";
p1.age = 25;
console.log(p1) // Person { name: '李亚鹏', age: 25 }

p1.eat("韭菜盒子"); // 李亚鹏 吃 韭菜盒子

const p2 = new Person("璐璐", 20);
p2.eat("腰子"); // 璐璐 吃 腰子
