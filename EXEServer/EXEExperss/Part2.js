import express from "express";

const app = express();
const PORT = 8080;

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    console.log(`i got name ${name}`);
    res.json({ msg: `got name: ${name}` })
})

app.get('/test', async (req, res) => {
    const name = "alice";
    try {
        const response = await fetch(`http://localhost:${PORT}/greet/bob`);
        const data = await response.json();

        if (data.msg?.includes(name)) {
            res.json({result : 'ok'})
        } else {
            res.json({result : 'fail'})
        }
    } catch (err) {
        console.log(`ERROR: ${err}`);
        res.status(500).json({result:"fail"})
    }
})


app.listen(PORT, () => {
    console.log(`Express server runing on http://localhost:${PORT}`);
});