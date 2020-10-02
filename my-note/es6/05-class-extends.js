//es6中的类相当于es5中的Function(){}(构造函数) 都是通过new来实例化对象
class Animal {
  constructor(name = "xiaoli", age) {
    this.name = name;
    this.age = age;
  }

  jiao() {
    console.log(`${this.name} 叫了`);
  }
}

class Cat extends Animal {
  //继承父类
  constructor(name, age, color) {
    super(name, age); //覆盖父类的参数   继承了constructor
    this.color = color; //子类自己的属性必须放在super之后
  }
  jiao() {
    console.log(`我们一起学 ${this.name} 叫 miao~miao~miao`);
  }
}

const kitty = new Cat("kitty", 2, "粉色");
console.log(kitty); //{ name: 'kitty', age: 2, color: '粉色' }
kitty.jiao(); //我们一起学 kitty 叫 miao~miao~miao

{
  // getter,setter
  class Parent {
    constructor(name = "mukewang") {
      this.name = name;
    }

    get longName() {
      //longName是属性不是方法 取值
      return "mk" + this.name;
    }

    set longName(value) {
      //longName是属性 赋值
      this.name = value;
    }
  }

  let v = new Parent();
  console.log("getter", v.longName); //getter mkmukewang
  v.longName = "hello";
  console.log("setter", v.longName); // setter mkhello
}

{
  // 静态方法(通过类去调用不是通过类的实例去调用)
  class Parent {
    constructor(name = "mukewang") {
      this.name = name;
    }

    static tell() {
      //static关键字
      console.log("tell");
    }
  }

  Parent.tell(); // tell
}

{
  // 静态属性
  class Parent {
    constructor(name = "mukewang") {
      this.name = name;
    }

    static tell() {
      //静态方法
      console.log("tell");
    }
  }

  Parent.type = "test"; //静态属性

  console.log("静态属性", Parent.type); //test
}
