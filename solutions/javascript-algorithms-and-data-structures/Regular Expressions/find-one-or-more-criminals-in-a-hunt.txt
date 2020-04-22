let reCriminals = /C+/; // Change this line
let quoteSample1 = "P1P5P4CCCP2P6P3";
let quoteSample2 = "P6P2P7P4P5CCCCCP3P1";
let quoteSample3 = "P1P2P3";
let quoteSample4 = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3";


console.log(quoteSample1.match(reCriminals)) // 3 crim
console.log(quoteSample2.match(reCriminals)) // 5 crim
console.log(quoteSample3.match(reCriminals)) // 0 crim
console.log(quoteSample4.match(reCriminals)) // 50 crim