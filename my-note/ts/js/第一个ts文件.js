"use strict";
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + person.lastName;
}
var user = new User('zhu', 'yuanzheng');
console.log(user); //User { firstName: 'zhu', lastName: 'yuanzheng', fullName: 'zhuyuanzheng' }
console.log(greeter(user));
// let list: number[] = [1,2,3] 这个写法较多 与下面相等
var list = [1, 2, 3];
//元组   可以定义元素数量和类型 表示一个已知元素数量和类型的数组
var x;
x = ['hello', 2];
//枚举  可以由枚举的值得到枚举的名字
// enum Color {
//     Red = 1,
//     Green = 3,
//     Blue = 5
// }
// let colorName: string | number = Color[3]
// console.log(colorName); //Green
//any   跳过数据类型检测  慎用
var good = [1, true, 'free'];
good[1] = 2;
console.log(good); // good [ 1, 2, 'free' ]
//void   与any相反表示没有任何类型
function warn() {
    console.log(666);
}
warn(); //666
var untable = null; //void类型只能是undefined 或者 null
var u = undefined;
var n = null;
var a = 2; //联合类型才能赋值
//never 表示永远不存在的数据类型  是任何类型的子类型  不能有返回值或者是报错或无限循环
function inifiniteLoop() {
    while (true) {
    }
}
function error(message) {
    throw new Error(message);
}
//类型转换
var someValue = 'great is good';
var strLength = someValue.length;
// let strLength = (someValue as string).length //与上面一样
console.log('strLength: ', strLength); // 13
