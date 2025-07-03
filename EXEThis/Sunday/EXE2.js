const person = {
  name: "David",
  greet: function () {
    console.log("this:", this);
    const innerArrow = () => {
      console.log("function", this);
    };
    innerArrow();
  }
};

person.greet();


