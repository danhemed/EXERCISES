const person = {
    name: "dan",
    method: function () {
        console.log(`hello ${this.name}`);
    }
};
function logger(callback) {
    callback();
}
// 1
logger(() => person.method());
// 2
logger(person.method.bind(person));