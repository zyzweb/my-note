/* eslint-disable */
// function f(x,y=7,z=42){
//    return x + y + z 
// }
// console.log(f(1,2));

function checkParameter(){
    throw new Error('can\'t be empty')
}

function ac(x=checkParameter(),y=2,z=42){ // 参数不能为空
 return x + y +z
}
console.log(ac(1)); //45
try {
    ac()
}catch(e){
    console.log(e);
}finally{
     
}

function f(...a) {  // 可变参数
    var sum = 0 
    a.forEach(item =>{
        sum += item*1
    })
    return sum
}
console.log(f(1,2,3,6));
