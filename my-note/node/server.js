const http = require("http");

let server = http.createServer((req, res) => {
  // res.write("test111");
  // res.end();
  res.setHeader("Content-Type","application/json")
  res.end('你好')
});

// server.listen(9000, "127.0.0.1", (err) => {
server.listen(80,'0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.log("start OK");
});


