// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// } // 0 1 2 3 4 5 6 7 8 9

// for (var i = 0; i < 10; i++) { //js单线程,先执行同步执行完之后i变为10,在执行异步就是10
//     setTimeout(() => {
//         console.log(i);
//     }, 100);  
// } // 10 10 10 10 10 10 10 10 10 10

for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j);
        }, 100); 
    })(i)
} // 0 1 2 3 4 5 6 7 8 9

// for (let i = 0; i < 10; i++) { //js单线程,先执行同步执行完之后i变为10,在执行异步就是10
//     setTimeout(() => {
//         console.log(i);
//     }, 100);  
// } // 0 1 2 3 4 5 6 7 8 9

var array = [1,2,3,4,5]
for (var i = 0; i < array.length; i++) {
    setTimeout((i) => {
        console.log(i);
    }, 1000,i);//作为前面的函数的参数 0 1 2 3 4
}
