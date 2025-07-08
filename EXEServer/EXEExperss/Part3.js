import express from "express";

const app = express();

const PORT = 8080;

app.use(express.json());

app.post('/action', async (req, res) => {
    const body = req.body;
    if (body.actionType === "joke") {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        res.status(200).json({ "joke" : `${data.setup.toUpperCase()} ${data.punchline.toUpperCase()}`})
        console.log(`response: 200`)
    } if (body.actionType === "cat fact") {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const data = await response.json();
        res.status(200).json({ "length" : `${data.length}`})
        console.log(`response: 200`);
    } else {
        res.status(400).json({'msg' : "body is malformed"});
        console.log(`response: 400`);
    }
})

app.listen(PORT, () => {
    console.log(`...`)
})