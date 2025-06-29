class Car {
    constructor (make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return `make: ${this.make}, model: ${this.model}.`
    }
}

export default Car;