function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {count++;}}
    return count;

  // Only change code above this line
}

console.log("---------------")
console.log("Test 1:")
console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } })); // 1
console.log("---------------")
console.log("Test 2:")
console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } })); // 2
console.log("---------------")
console.log("Test 3:")
console.log(countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } })); // 0