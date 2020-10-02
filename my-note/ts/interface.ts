interface LabelValue { //相当于名字用来描述接口结构
    label: string //是必须包含的属性
}

function printLabel(labelObj:LabelValue) { //相当于 labelObj:{label:string}
    console.log(labelObj.label);
}
let myObj = {size:10, label:'good is good'}
printLabel(myObj) // good is good

//可选属性   好处1.可以作预定义  2.可以捕获不存在属性的错误
interface Square {
    color: string
    area: number
}
interface SquareConfig {
    color?: string   //?表示可选属性
    width?: number
}
function createSquare(config:SquareConfig): Square {//前面设置参数类型  后面设置返回类型
    let newSquare = {color: 'white', area: 100}
    if(config.color) {
        newSquare.color = config.color
    }
    if(config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
let mySquare = createSquare({color: 'black', width: 20})
console.log('mySquare: ', mySquare);
