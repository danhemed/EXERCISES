import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers["content-type"]);
    
    if (req.method === 'POST' && req.headers['content-type'] === 'application/json') {
        console.log(`JSON accepted`);
    } else {
        console.log(`Unsupported request`);
    }
})

server.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`);
})