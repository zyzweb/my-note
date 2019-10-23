//arguments 是函数参数调用对象,类似于事件对象event
// arguments.callee 指向函数本身    arguments.length 函数参数个数
// caller是函数对象的属性,指向调用这个函数的函数

function arr(a,b) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);
    console.log(arguments.callee);
    console.log(arr.caller);
}
arr(3,4)

// function eng() {
//     arr()
// }
// eng()

