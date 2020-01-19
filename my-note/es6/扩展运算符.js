//es3/5 可变参数
{
  function f() {
    var a = Array.prototype.slice.call(arguments);//类数组对象arguments转为真数组
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
    console.log(a);//[1,2,3,6]
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
  console.log(other); //[1,2,"hello", "true", 7]
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
//还有一种方法为  Array.prototype.slice.call(arr) 总共3种方法  默认就是call(arr, 0)
[...document.querySelectorAll('div')]  // Array.from(document.querySelectorAll('div'))  Array.map(callback) 回调函数对数组进行操作返回新数组
//数组去重
let array = [1, 1, 1, 1, 2, 3, 4, 4, 5, 3];
 let set = [...new Set(array)];//set去重...(扩展运算符)将类数组转为真数组
 console.log(set); // [1,2,3,4,5]

//解构
let {x,y,...z} = {x: 1,y: 2,a: 3,b: 4}
console.log(x);  //1
console.log(y);  //2
console.log(z);  //{a: 3,b: 4}

console.log(...[1,2,3]);// 1 2 3
console.log('a',...[1,2,3]); // a 1 2 3 

//对象的扩展运算符不是es6的语法
let initObj = {a:1,b:2}
let mapGetters = obj => {
    return {
        c:4,
        d:6
    }
}
let fn = fn => console.log(fn)


let target = { ...initObj, ...mapGetters({ f: 4 }), fn} //{a: 1, b: 2, c: 4, d: 6, fn: ƒ}

// let target = Object.assign( initObj, mapGetters({f: 4 }), fn) //与Object.assign作用一样
console.log(target);
