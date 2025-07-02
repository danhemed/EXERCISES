function waitAll() {
    const first =  new Promise((rec, rej) => {
        setTimeout(() => {
            rec("First");
        }, 1000)
    })
    const second =  new Promise((rec, rej) => {
        setTimeout(() => {
            rec("Second");
        }, 2000)
    })
    const third =  new Promise((rec, rej) => {
        setTimeout(() => {
            rec("Third");
        }, 3000)
    })
    return Promise.all([first, second, third]);
}

waitAll()
    .then(rec => console.log(rec))