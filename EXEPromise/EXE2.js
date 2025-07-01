import fs from "fs";

function readFileConstent(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                return rej(err);
            }
            return res(data);
        });
    })
}

const path = "./text.txt";

readFileConstent(path)
    .then(res => console.log(res))
    .catch(err => console.log(err))


