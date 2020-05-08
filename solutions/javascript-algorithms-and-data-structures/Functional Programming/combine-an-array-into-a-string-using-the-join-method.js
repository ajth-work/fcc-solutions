function sentensify(str) {
  // Only change code below this line
let newSent = [];
let newerSent;
newSent = str.split(/\W/g);
console.log(newSent);
newerSent = newSent.join(" ");
console.log(newerSent);
return newerSent;

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
