function factorialize(num) {
  if (num === 0 || num === 1) {
  return 1;
  } else {
    return num * factorialize(num - 1);
    }   
  } 

console.log(factorialize(5)); // should return a number, return 120.
// console.log(factorialize(10)); // should return 3628800.
// console.log(factorialize(20)); // should return 2432902008176640000.
// console.log(factorialize(0)); // should return 1.