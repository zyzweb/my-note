// 判断是否在微信
function isweixin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.search('micromessenger') > -1) {
        return true;
    } else {
        return false;
    }
}
//判断是否在钉钉看有没有dingtalk字符串

//判断函数执行次数
function foo(){
    //其他函数逻辑blah blah。。。
    console.count('foo 被执行的次数：');
}
foo();
foo();
foo();

//检测一段代码的执行时间
//方法一:
console.time('start') // start和后面要一致
var arr = new Array(1000000)
for(var i = 0 ;i< arr.length ;i++) {
    arr[i] = new Object()
}
console.timeEnd('start')

//方法二:
var start = new Date().getTime()
var array = new Array(1000000)
for (let i = 0; i < array.length; i++) {
    array[i] = new Object()
}
console.log(new Date().getTime() - start);

//渲染对象数组
let arr = [{a:2},{b:3}]
arr.map(i => ({...i, c:5}))
console.log(arr.map(i => ({...i, c:5})));

//生成空数组 
Array.apply(null,{length: 10})  // === new Array(10).fill(1)
