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
