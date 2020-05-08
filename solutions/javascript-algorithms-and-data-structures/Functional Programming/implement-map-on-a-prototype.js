// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
  for(let i = 0; i < s.length; i++){
  newArray = newArray.concat(s[i]*2)
  }
  console.log(newArray)
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
