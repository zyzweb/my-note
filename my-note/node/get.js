//1.导入
const http = require('http')
const url = require('url')
const querystring = require('querystring')

//2.创建服务
const server = http.createServer()

//3.请求、处理、响应
server.on('request',(req,res)=>{
    // /login?username=zhangsan&password=123

    const urlStr = req.url
    console.log('urlStr-------------', urlStr)
    if(urlStr.includes('login')){
        // console.log(urlStr)
        //3.1 获取路径【找URL模块】
        const urlObj = url.parse(urlStr)
        console.log(urlObj)
        // console.log(`获取到的路劲是 ${urlObj.pathname}`)

        //3.2 把urlObj.query(键值对的字符串)转成 js对象
        const params = querystring.parse(urlObj.query) //将/login?username=zhangsan&&password=1234' 解析成{ username: 'zhangsan', password: '1234' }
        console.log(params)

        const result = {
            status:0,
            message:'登录成功'
        }

        if(params.username!=='zhangsan' || params.password!=='123'){
            result.status = 1
            result.message = "用户名或是密码错误"
        }
        // res.writeHead(500, { "content-type": "text/plain;charset=utf-8" }); //可以设置状态码这里是500
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader("Content-Type","application/json;charset=utf-8")
        res.end(JSON.stringify(result))
    }else{
        res.end("")
    }
})

//4.开启Web服务
server.listen(6678,"localhost",err=>{
    if(err){
        console.log(err)
    }
    console.log("启动成功!!!")
})
