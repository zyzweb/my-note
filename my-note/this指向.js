
//1.谁调用this指向谁
//2.多层调用指向它前面的那个  eg: obj.a.b() 与 obj1.obj.a.b() 都是指向a
//3.构造函数里的this指向它实例化的对象(有返回值的话指向返回的函数或对象)
//4.箭头函数里的this是指向父级作用域的this
//5.原型链的调用指向新的对象
//6.自调用函数指向window(严格模式为undefined)
//7.setTimeout/setInterval中指向window
//8.严格模式下this指向undefined
var obj = {
    name: function () {
    console.log(this); //function name(){}
        setTimeout(() =>
        {console.log(this)}) //function name(){}
    }
}
var sss = obj.name()  //这两个this都是指向obj这个对象 前一个obj调用指向obj 后一个指向父级name所在作用域的this

var point = {
    x : 0,
    y : 0,
    moveTo : function(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
        console.log(this.x);
        console.log(this.y);
    }
};
point.moveTo(1, 1) // 1,1   this指向的是point this.x = 0 + 1


window.val = 1;
var obj = {
    val: 2,
    dbl: function () {
        this.val *= 2;
        val *= 2;
        console.log('val:', val);
        console.log('this.val:', this.val);
    }
};

 // 说出下面的输出结果
 obj.dbl(); // 2 4
 var func = obj.dbl;
 func(); // 8 8 上面执行之后val变为2 val和this.val都是指向外面window的val


 var name = "caibaojian.com",
    person = {
      name : "kang",
      getName : function(){
  　    return function(){
    　    return this.name;
  　    };
      }
    };

console.log(person.getName()()); //caibaojian.com   函数柯里化 相当于自己调用自己 this指向window


var a = {
    b: function() {
      var func = function() {
        console.log(this.c);
      }
      func();
    },
    c: 'hello'
  }
  a.b(); // undefined  this指向window
  console.log(a.c); //hello
