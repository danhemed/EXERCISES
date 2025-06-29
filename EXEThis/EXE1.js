class Person {
    constructor (name) {
        this.name = name;
    }

    sayName() {
        return `User: ${this.name} using this!`;
    }
}

const person = new Person("dan");
console.log(person.sayName());