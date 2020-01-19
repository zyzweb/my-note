let input: [number, number] = [1,2]
function fa([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
fa(input) // 1 2

let [,second,,four] = [1,2,3,4]
console.log(second); //2
console.log(four); //4

let [one,...two] = [1,2,3,4]
console.log(one); //1
console.log(two); //[2,3,4] 

function keepObject(wholeObject: {a: string, b?: number}) { //b为可选参数
    let {a, b=1001} = wholeObject  //b给了一个默认值1001
    
}

//对象的展开 相当于 Object.assign()
let defaults = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
}
let search = {...defaults, food: 'rich'}
console.log(search); // {food: 'rich', price: '$10', ambiance: 'noisy'}