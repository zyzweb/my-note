var express=require("express");
var app=express();
var exStatic=require("express-static");
app.use(exStatic('./'));//这一句中的'./'是静态页面的相对路径。
app.listen(90,console.log("start 90 OK"))

//还可以用原生node写   fs的 readFile   write
// fs.readFile(fileName,function (err,data) {
//     res.setHeader("Content-Type","text/html;charset=utf-8")
//     res.write(data)
// })

//访问 http://localhost:90

var app2 = express()
app2.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin','*')
  res.send('你好')
})
app2.listen(91, console.log("start 91 OK"))

