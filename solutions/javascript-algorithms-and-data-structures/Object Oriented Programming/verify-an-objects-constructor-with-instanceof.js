function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(5);

console.log("myHouse = ", myHouse);
console.log("Instance of the House constructor? ", myHouse instanceof House);