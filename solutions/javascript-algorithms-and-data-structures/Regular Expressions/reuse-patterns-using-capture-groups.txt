let repeatNum = "42 42 42";
// ^ indicates matching starts only at the beginning of string
// (\d+) indicates any digit occuring once or more in succession
// (\s) indicates whitespace
// \1 indicates occurence of (\d+)(\s) "42"
// \2 indicates occurences of (\d+)(\s) repeating "42 42 " (erroneous understanding?)
// \1 indicates occurence of (\d+)(\s) repeating in succession "42 42" (erroneous understanding?)
// $ indicates that the matching stops at this character
let reRegex = /^(\d+)(\s)\1\2\1$/; // Change this line
let result = repeatNum.match(reRegex);
console.log(result);