let WebSocketServer = require('ws').Server

//创建端口是8989的WebSocketServer
let wsserver = new WebSocketServer({ port: 8989 });

//接收所有的客户端
let clientArr = []

//开启webscoket服务器
wsserver.on('connection', function (client) {
    console.log('client connected');

    clientArr.push(client)

    //发送消息
    setInterval(function() {
        clientArr.length && broadcastSystem(clientArr)
    },3000)

    //监听服务端接收到的消息
    client.on('message', function (message) {
        console.log(message);
    });

    //监听失败事件
    client.on("error", function (err) {
        console.error(err)
    })
    
    //监听关闭事件
    client.on('close', function (code,reason) {
        console.log("关闭事件",code,reason)
    })   
});

//广播系统
function broadcastSystem(clientArr) {
    for(let client of clientArr) {
        console.log(client)
        client.send("这是一条广播消息11")
    }
}


