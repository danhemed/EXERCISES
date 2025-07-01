function raceTimers() {
    return new Promise((rec, rej) => {
        setTimeout(() => {
            rec("Timer A Finished!");
        }, 2000)
        setTimeout(() => {
            rec("Timer B Finished!");
        }, 3000)
    })
}

raceTimers()
    .then(rec => console.log(rec))
