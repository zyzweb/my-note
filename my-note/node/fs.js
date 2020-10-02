const fs = require('fs');
// fs来读写文件
// 异步的读取-----------------------------------------------
console.log(666);
fs.readFile('./get.js','utf-8',(error,data)=>{
  // 没有错误
  // console.log(error);
  // 有错误才需要打印
  if(error){
      console.log(error);
  }else{
      console.log(data);
      console.log('读取完毕');
  }
});

// 同步读取文件-----------------------------------------------------------------------------
// let jQStr = fs.readFileSync('./js/jquery-1.12.4.min.js','utf-8');
// console.log(jQStr);
