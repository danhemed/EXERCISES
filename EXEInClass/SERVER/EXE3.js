import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === "/hello") {
        res.end(`Hello from ${req.method}`);
        console.log(req.method);
    } else if (req.method === 'POST' && req.url === "/hello") {
        res.end(`Hello from ${req.method}`);
        console.log(req.method);
    } else {
        res.end(`Not supported`);
    }
})

server.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`);
})