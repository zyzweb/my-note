/* eslint-disable */
new Date().toLocaleTimeString ()  //获取时间  下午4:21:03
new Date().toLocaleDateString ()  //获取日期  2018/7/18
new Date().toLocaleString ()     //2018/7/18 下午4:21:03
Date.now()   //1563333257890
new Date()   // Wed Jul 17 2019 11:14:24 GMT+0800 (中国标准时间)
new Date().getFullYear()  //2019
new Date().getDay()  //星期几
new Date().getDate()  //几号
new Date().getHours()  //小时
new Date().getMinutes()  //分钟  
new Date().getSeconds()  //秒  
new Date().getMilliseconds()  //现在毫秒  小于1000  
// getTime()  1970 1 1  毫秒

function date(time) {//不传值为现在时间,传值为传的参数
    if(!time){
        var year = String(new Date().getFullYear())
        var month = new Date().getMonth() + 1
        var Day = String(new Date().getDate())
        if(month<10){
            month = '0' + month
        }
        return year + month + Day //year + '-' + month + '-' + Day
    } else {
        var year = String(new Date(time).getFullYear())
        var month = new Date(time).getMonth() + 1
        var Day = String(new Date(time).getDate())
        if(month<10){
            month = '0' + month
        }
        return year + month + Day //year + '-' + month + '-' + Day
    }
}
console.log(date());


//每个月最大的天数
let pub = {};
pub.getMaxDay = function( year, month ){
    return new Date( year, month,0).getDate();
}; 
console.log(pub.getMaxDay(2019,8)); //31
