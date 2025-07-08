import express from "express";

const app = express();

const users = [
    {
        name: "dan"
    },
    {
        name: "gad"
    }
]

app.get('/', (req, res) => {
    console.log(req.method);
    res.end('welcome to home!');
});

app.get('/about', (req, res) => {
    res.end('About us!');
});

app.get('/users/:name', (req, res) => {
    res.setHeader("content-type" , "aplliction/json")
    res.json(users.find((user) => user.name === "dan"));
})

app.post('/riddle', (req, res) => {
    
})

const PORT = 3005;

app.listen(PORT, () => {
    console.log(`Express server runing on http://localhost:${PORT}`);
});