let sampleWord = "astronaut";
let pwRegex = /(?=^[a-z])(?=\w{4}\d+)/; // Change this line
let result = pwRegex.test(sampleWord);

console.log("astronaut", pwRegex.test("astronaut")); // not match
console.log("banan1", pwRegex.test("banan1")); // not match
console.log("1234", pwRegex.test("1234")); // not match
console.log("8pass99", pwRegex.test("8pass99")); // not match
console.log("12abcde", pwRegex.test("12abcde")); // not match

console.log("astr1on11aut", pwRegex.test("astr1on11aut")); // match
console.log("abc123", pwRegex.test("abc123")); // match 
