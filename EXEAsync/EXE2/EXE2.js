import fs from "fs";
import path from "path";


fs.readdir("./folderFiles", (err, data) => {
    if (err) {
        console.log(`error read: ${err}`);
        return;
    }
    data.forEach((file) => {
        const filePath = path.join("./folderFiles", file);
        fs.stat(filePath, (err, stat) => {
            if (err) {
                console.log(`error stat: ${err}`);
            }
            if (stat.isFile() === true) {
                console.log(file);
                
            }
        })

    }); 
});