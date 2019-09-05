//es3/5 可变参数
{
  function f() {
    var a = Array.prototype.slice.call(arguments);
    var sum = 0;
    a.forEach(function(item) {
      sum += item;
    });
    return sum;
  }
  console.log(f(1, 2, 3, 6));
}

//es6 可变参数
{
  function f(...a) {
    var sum = 0;
    //a为数组
    a.forEach(item => {
      sum += item;
    });
    return sum;
  }
  console.log(f(1, 2, 3, 6));
}

//利用扩展运算符合并数组
{
  var params = ["hello", "true", 7];
  var other = [1, 2, ...params];
  console.log(other);
}
//es3/5写法
{
  var params = ["hello", "true", 7];
  var other = [1, 2].concat(params);
  console.log(other);
}

//可以替代apply
let a = [1,2,3]
let res = (x,y,z) => x + y + z
console.log(res(...a)); // 等价于console.log(res.apply(null,a))

//将类数组转化为真数组
[...document.querySelectorAll('div')]  // Array.from(document.querySelectorAll('div'))  Array.map(callback) 回调函数对数组进行操作返回新数组

//解构
let {x,y,...z} = {x: 1,y: 2,a: 3,b: 4}
console.log(x);  //1
console.log(y);  //2
console.log(z);  //{a: 3,b: 4}
