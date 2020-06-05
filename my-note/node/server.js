const http = require("http");

let server = http.createServer((req, res) => {
  res.write("test111");
  res.end();
});

server.listen(8080, "127.0.0.1", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("start OK");
});


