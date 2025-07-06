import http from "http";

const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.body);
    console.log(req.headers);
    console.log(req.httpVersion);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from server!');
});

server.on("request", (req, res) => {
    const body = [];
    req.on("data", (chunk) => {
        // console.log(chunk);
        body.push(chunk);
    })
    req.on("end", () => {
        const data = JSON.parse(Buffer.concat(body).toString());
        console.log(data);
        res.end(JSON.stringify(data));
    })
    req.on("error", err => {
        console.error("request error:", err);
        res.writeHead(500, {'Content-Type' : 'text/plain'});
        res.end(JSON.stringify({error: "server error"}));
    })
})

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


