function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("I'm gonna eat some food, woof");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
