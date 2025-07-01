import readline from "readline-sync";

const choose = readline.question(
    "1. Create user name.\n" + 
    "2. Read all users name.\n" + 
    "3. Update user name.\n" + 
    "4. Delete user name.\n" + 
    "Choose number:\n"
);

const path = "./db/db.txt"; 

function Create(path) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(`Read ERROR: ${err}`);
            return;
        }
        const userInput = readline.question("Enter your user name:\n");
        const jsonData = JSON.parse(data);
        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i] === userInput) {
                console.log("The user name is already exists!");
                return;
            }
        }
        jsonData.push(userInput);

        const sringData = JSON.stringify(jsonData);

        fs.writeFile(path, sringData, (err) => {
            if (err) {
                console.log(`Write ERROR: ${err}`);
                return;
            }
            console.log(`user name added!`);
            
        })
    })
};

function Read(path) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(`Read ERROR: ${err}`);
            return;
        }
        const jsonData = JSON.parse(data);
        console.log("users:");
        for (let i = 0; i < jsonData.length; i++) {
            console.log(`${i+1}. ${jsonData[i]}`);
        }
    })
};

function Update(path) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(`Read ERROR: ${err}`);
            return;
        }

        const userInput = readline.question("Enter your user name:\n");
        const jsonData = JSON.parse(data);

        let index = -1;

        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i] === userInput) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log(`user name isn't found!`);
            return;
        }

        const userInputNew = readline.question("Enter your new user name:\n");
        jsonData[index] = userInputNew;

        const sringData = JSON.stringify(jsonData);
        fs.writeFile(path, sringData, (err) => {
            if (err) {
                console.log(`Write ERROR: ${err}`);
                return;
            }
            console.log(`The user name updated!`);
        });
    });
};

function Delete(path) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(`Read ERROR: ${err}`);
            return;
        }

        const userInput = readline.question("Enter your user name:\n");
        const jsonData = JSON.parse(data);

        let index = -1;

        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i] === userInput) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log(`user name isn't found!`);
            return;
        }

        jsonData.pop(index);

        const sringData = JSON.stringify(jsonData);
        fs.writeFile(path, sringData, (err) => {
            if (err) {
                console.log(`Write ERROR: ${err}`);
                return;
            }
            console.log(`The user name delete!`);
        });
    });
};

function Strat(choose, path) {
    switch (choose) {
        case "1":
            Create(path);
            break;
        case "2":
            Read(path);
            break;
        case "3":
            Update(path);
            break;
        case "4":
            Delete(path);
            break;
        default:
            console.log(`enter only number 1-4`);
            break;
    }
}

Strat(choose, path)