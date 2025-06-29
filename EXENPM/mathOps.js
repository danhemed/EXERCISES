function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a === 0 || b === 0) {
        console.log("you can'y dividing in zero!");
    } else {
        return a / b;
    }
}

export default {multiply, divide};