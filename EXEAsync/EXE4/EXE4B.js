import fs from "fs";
import readline from "readline";

const fileStream = fs.createReadStream("./quoted.txt");

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
});

const lines = [];

rl.on("line", (line) => {
    lines.push(line);
})

rl.on("close", () => {
    let x = Math.floor((Math.random() * lines.length) + 0);
    console.log(lines[x]);
});
