const http = require("http");
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello, World!");
    response.end(); //boa prática no node
});

server.listen(8081); //acessar localhost:8081 abc
