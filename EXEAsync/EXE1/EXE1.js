import fs from "fs";

fs.readFile("./text1.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("read error:", err);
    }

    fs.stat("./text1.txt", (err, stats) => {
        if (err) {
            console.log("stat error:", err);
        }
        console.log(`File Content:\n${data}`);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created At: ${stats.birthtime}`);
    });
});