import fs from "fs";

fs.readFile("./text.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

console.log("end");

fs.writeFile("./text2.txt", "new file more text", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("create file!");
});

fs.readFile("./text2.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});