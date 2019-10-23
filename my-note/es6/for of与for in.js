//遍历数组 for of
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
  for (const values of arr.values()) {
    console.log(values); // 3 4 5
  }
}

for (let [index, value] of [3, 4, 5].entries()) {
  console.log("values", index, value);
}

//遍历对象  for of
{
  let obj = { name: "张三", age: 18 };
  for (const value in obj) {
    console.log(obj[value]);
  }
}

const obj = { foo: 'bar', baz: 'abc' }; 
console.log(Object.entries(obj));  // [['foo', 'bar'], ['baz', 'abc']]
