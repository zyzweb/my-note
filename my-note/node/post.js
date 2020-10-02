//1.导入
const http = require('http')
const querystring = require('querystring')

//2.创建服务
const server = http.createServer()

//3.请求、处理、响应
server.on('request',(req,res)=>{
    // /login  favxxx.ico
    const urlStr = req.url

    if(urlStr.includes('login')){
        console.log(`获取到的路径是 ${urlStr}`)

        // 获取参数
        let body = ''
        req.on('data',chunk=>{
            console.log(chunk.toString())
            body += chunk
        })

        req.on('end',()=>{ //异步
            const params = querystring.parse(body)

            const result = {
                status:0,
                message:'登录成功'
            }

            if(params.username!=='lisi' || params.password!=='456'){
                result.status = 1
                result.message = "用户名或密码错误"
            }

            res.setHeader("Content-Type","application/json;charset=utf-8")
            console.log(JSON.stringify(result));
            res.end(JSON.stringify(result))
        })
    }else{
        res.end("")
    }
})

//4.开启Web服务
server.listen(6687,"127.0.0.1",err=>{
    if(err){
        console.log(err)
    }

    console.log("启动成功!!!")
})


