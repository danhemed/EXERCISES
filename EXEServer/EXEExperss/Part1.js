import express from "express";

const app = express();

const port = 8080;

app.get('/', (req,res) => {
    const dateTime = new Date().toISOString();
    res.json({ msg : `hi from get endpoint ${dateTime}` })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});