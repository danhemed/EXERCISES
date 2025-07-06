import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
})

server.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`);
})