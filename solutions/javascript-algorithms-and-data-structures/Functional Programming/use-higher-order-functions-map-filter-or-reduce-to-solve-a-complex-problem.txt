const squareList = (arr) => {
  // Only change code below this line
  // need to filter positive values
  var arr2;
  arr2 = arr.filter(arr => (arr > 0) && (arr % 1 == 0));
  console.log("Original List =", arr);
  console.log("Positive Integers =", arr2);
  var answer = arr2.map((y) => y * y);
  console.log("Squared Answer =", answer);
  return answer;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
