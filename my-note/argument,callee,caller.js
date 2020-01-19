//arguments是类数组对象与document.querySelectorAll('div')一样
//arguments 是函数参数调用对象,类似于事件对象event   其他函数内置对象  name caller  length(===arguments.length)
// arguments.callee 指向函数本身    arguments.length 函数参数个数
// caller是函数对象的属性,指向调用这个函数的函数

function arr(a, b) {
  console.log(arguments); //{0:3,1:4,length:2}  为类数组
  console.log(arguments[0]); //3
  console.log(arguments.length); //2
  console.log(arguments.callee); //arr(){}
  console.log(arr.caller);
}
arr(3, 4);

function test(a, b, c, d) {
  var arg = Array.prototype.slice.call(arguments, 1);// 将1作为参数传给slice方法,arguments没有slice方法
  console.log(arg);
}
test("a", "b", "c", "d"); //b,c,d
