import fs from "fs";

fs.readFile("./quoted.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(`err read: ${err}`);
    }
    const lines = data.split('\n');
    let x = Math.floor((Math.random() * lines.length) + 0);
    console.log(lines[x]);
});