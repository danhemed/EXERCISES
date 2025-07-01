function randomOperation() {
    return new Promise((res, rej) => {
        const num = Math.floor(Math.random() * 2 ) + 1;
        if (num === 1) {
            res("Success!");
        }
        if (num === 2) {
            rej("Failure!");
        }
    })
}

randomOperation()
    .then(rec => console.log(rec))
    .catch(rej => console.log(rej))