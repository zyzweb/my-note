//遍历数组 for of    iterator设置成功之后才能使用for of  优先使用 for   of
{
  let arr = [3, 4, 5];
  for (const value of arr) {
    console.log(value); // 3 4 5
  }
}

{
  let arr = [3, 4, 5];
  for (const index of arr.keys()) {
    console.log(index); // 0 1 2
  }
}

{
  let arr = [3, 4, 5];
  for (const value of arr.values()) {
    console.log(value); // 3 4 5
  }
}

{
  let arr = [3, 4, 5];

  for (let [index, value] of arr.entries()) {
    console.log(index, value);
  }
}

//遍历对象  for in  数组也可以使用
{
  let obj = { name: "张三", age: 18 };
  for (const key in obj) {
    console.log(obj[key]); // 张三 18
  }
}

const obj = { foo: "bar", baz: "abc" };
console.log(Object.entries(obj)); // [['foo', 'bar'], ['baz', 'abc']]



//for in 循环是用于遍历对象的，但它可以用来遍历数组吗？答案是可以的，因为数组也是对象，但是如果用其遍历数组会存在一些隐患：其会遍历数组原型链上的属性。
//因为我们不能保证项目代码中不会对数组原型链进行操作，也不能保证引入的第三方库不对其进行操作，所以不要使用 for in 循环来遍历数组

let arr = [1, 2];

for (let key in arr) {
    console.log(arr[key]); // 会正常打印 1, 2
}

// 但是如果在 Array 原型链上添加一个方法
Array.prototype.test = function() {};

for (let key in arr) {
    console.log(arr[key]); // 此时会打印 1, 2, ƒ () {}
}
