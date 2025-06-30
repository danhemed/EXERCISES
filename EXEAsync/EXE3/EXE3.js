function countdown(number) {
    if (number < 0) {
        console.log("Time's up!");
    } else {
        console.log(number);
        setTimeout(() => countdown(number-1), 1000);
    }
}
countdown(5);