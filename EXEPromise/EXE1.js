function delayedGreet(name, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            reject("delay < 0");
            return;
        }
        setTimeout(() => {
            resolve(`Hello: ${name}`);
        }, delay);
    });
}

delayedGreet("Dan", -2200)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log("ERROR",err);
    });