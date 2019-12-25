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


//1.通过回调函数方式
function getSomething(cb) {
    var r = 0
    setTimeout(() => {
        r =2
        cb(r)
    }, 10);
}

function compute(x) {
    console.log(x * 2);
}

getSomething(compute)

//2.通过promise的方式
function getSomething() {
    var r = 0;
    return new Promise(function(resolve) {
        setTimeout(function(){
            r = 2;
            resolve(r);
        },10)
    })
}

getSomething().then(res => {
    console.log(res*2);
});

//3.通过async的方式
function getSomething() {
    var r = 0;
    return new Promise(function(resolve) {
        setTimeout(function() {
            r = 2;
            resolve(r);
        },10)
    })
}
async function compute() {
    var x = await getSomething();
    alert(x * 2);
}
compute();

//4.通过generator方式实现
function getSomething() {
    var r = 0;
    setTimeout(function() {
        r = 2;
        it.next(r);
    },10);
}
function *compute(it) {
    var x = yield getSomething();
    alert(x * 2);
}
var it = compute();
it.next();
//同步的写法实现异步的逻辑

//5.通过promise和generator相结合的方式
function getSomething() {
    var r = 0;
    return new Promise(function(resolve) {
        setTimeout(function() {
            r = 2;
            resolve(r);
        },10)
    })
}
function *compute() {
    var x = yield getSomething();
    alert(x * 2);
}
var it = compute();
it.next().value.then(function(value) {
    it.next(value);
})
