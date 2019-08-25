/* eslint-disable */
Date.now()   //1563333257890
new Date()   // Wed Jul 17 2019 11:14:24 GMT+0800 (中国标准时间)
new Date().getFullYear()  //2019
new Date().getDay()  //2019
new Date().getHours()  //2019
new Date().getMinutes()  //2019  
new Date().getSeconds()  //2019  
// getTime()  1970 1 1  毫秒

function date() {
    var year = String(new Date().getFullYear())
    var month = new Date().getMonth() + 1
    var Day = String(new Date().getDate())
    if(month<10){
        month = '0' + month
    }
    return year + month + Day
}
console.log(date());


//每个月最大的天数
let pub = {};
pub.getMaxDay = function( year, month ){
    return new Date( year, month,0).getDate();
}; 
console.log(pub.getMaxDay(2019,8)); //31
