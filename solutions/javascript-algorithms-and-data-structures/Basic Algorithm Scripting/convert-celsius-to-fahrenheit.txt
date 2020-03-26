function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius*(9/5))+32
  return fahrenheit;
}

convertToF(30);
convertToF(0); // should return a number
convertToF(-30); // should return a value of -22
convertToF(-10); // should return a value of 14
convertToF(0); // should return a value of 32
convertToF(20); // should return a value of 68
convertToF(30); // should return a value of 86