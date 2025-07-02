import fs from "fs";

function checkFileExists(path) {
    return new Promise((rec, rej) => {
        fs.readFile(path, )
    })
}

const path = "./tt.txt";

checkFileExists(path)
    .then(rec => console.log(rec))
    .catch(rej => console.log(rej))