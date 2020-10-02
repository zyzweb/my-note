class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string,lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + lastName

    }
}
let user = new User('zhu', 'yuanzheng')
console.log(user); //User { firstName: 'zhu', lastName: 'yuanzheng', fullName: 'zhuyuanzheng' }

interface Person { //定义类型
    firstName: string
    lastName: string
}
function greeter(person: Person) {
    return 'Hello ' + person.firstName + person.lastName
}
console.log(greeter(user));

// let list: number[] = [1,2,3] 这个写法较多 与下面相等
let list: Array<number> = [1,2,3] //泛型

//元组   可以定义元素数量和类型 表示一个已知元素数量和类型的数组
//TS中数组元素类型必须一致，如需要不同元素，可以用元组了！
let x: [string,number]
x = ['hello', 2]

//枚举  可以由枚举的值得到枚举的名字
// enum Color {
//     Red = 1,
//     Green = 3,
//     Blue = 5
// }
// let colorName: string | number = Color[3]
// console.log(colorName); //Green

//any   跳过数据类型检测  慎用
let good: any[] = [1, true, 'free']
good[1] = 2
console.log(good); // good [ 1, 2, 'free' ]

//void   与any相反表示没有任何类型，一般用在无返回值的函数
function warn(): void { //void 这里表示没有任何返回值
    console.log(666);
}
warn() //666

let u: undefined = undefined
let n: null = null

let a: number | string = 2 //联合类型才能赋值



//never 表示永远不存在的数据类型  是任何类型的子类型  常用作为抛出异常或无限循环的函数返回类型
function inifiniteLoop(): never { //死循环
    while (true) {
    }
}
function error(message: string): never { //抛出错误
    throw new Error(message)
}

//类型转换
let someValue: any = 'great is good'
let strLength = (<string>someValue).length
// let strLength = (someValue as string).length //与上面一样
console.log('strLength: ', strLength); // 13




