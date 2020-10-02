//1.导入http
const http = require("http");
const fs = require("fs");
const path = require("path");
const multiparty = require("multiparty");
const util = require('util')
const format = require('date-format')

//2.创建服务
const server = http.createServer((req, res) => {
  const urlString = req.url;

  // 判断路径中是否包含uploadPage
  if (urlString.includes("uploadPage")) {
    const filePath = path.join(__dirname, "html/uploadPage.html");

    fs.readFile(filePath, (err, data) => {
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      res.end(data);
    });
  } else if (urlString.includes("postUpload") && req.method === "POST") {
    //真正处理文件上传操作
    //1.先创建要上传的文件夹
    const uploadDir = path.join(__dirname, "upload");

    //2.判断文件夹是否存在
    const exists = fs.existsSync(uploadDir);
    if (!exists) {
      const err = fs.mkdirSync(uploadDir);

      if (err) {
        console.log(err);
      }

      console.log("mkdir OK");
    }

    //3.调用multiparty的方法
    // parse a file upload
    const form = new multiparty.Form({ uploadDir });

    //4.解析，拿到文本域和文件域
    // fields 文本域  nickname sex
    // files 文件域 upload1 upload2
    form.parse(req, function(err, fields, files) {
      // 文本域fields 打印，拿到 lisi666 男
      //['nickname','sex']
      Object.keys(fields).forEach(key=>{
        console.log(`key is ${key}`)
        console.log(`value is ${fields[key][0]}`)
        // 后续需要把nickname、sex的值更新到数据库中...
      })

      console.log("----------------------------------")

      // 打印一下文件域
      Object.keys(files).forEach(key=>{
        console.log(`key is ${key}`)
        // console.log(`value is ${files[key][0]}`)
        console.log(files[key][0])

        // 重命名上传的文件名
        const oldPath = files[key][0].path

        const newPath = path.join(__dirname,"upload",`${format('yyyyMMddhhmmssSSS', new Date())}.txt`)

        // 重命名
        const err = fs.renameSync(oldPath,newPath)
        if(err){
          console.log(err)
        }

        console.log("rename OK")
      })

      res.writeHead(200, { "content-type": "text/plain;charset=utf-8" });
      res.write("received upload:\n\n");//换2行
      res.end(util.inspect({ fields: fields, files: files }));
    });
    
  } else {
    res.end("");
  }
});

//3.启动
server.listen(3000, "127.0.0.1", err => {
  if (err) {
    console.log(err);
  }

  console.log("start OK");
});
