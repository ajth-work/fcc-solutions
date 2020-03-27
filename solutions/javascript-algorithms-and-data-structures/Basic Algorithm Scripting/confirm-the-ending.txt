function confirmEnding(str, target) {
  let extractedFromStr;
  let result;
  console.log("Find [", target, "] at the end of [", str, "].")
  //first check length of target
  console.log("Checking ... Length of Target = ", target.length)
  //compare 
  console.log("Does the string's extracted ending of [", extractedFromStr = str.slice(str.length - target.length), "] match the target's ending of [", target, "]?");
  if (result = (extractedFromStr === target)) { 
    console.log("Results =", result)
    return true
    } else 
    console.log("Results =", result)
    return false

} 
/*
confirmEnding("Bastian", "n"); // should return true.


confirmEnding("Congratulation", "on"); // should return true.
confirmEnding("He has to give me a new name", "name"); // should return true.
confirmEnding("Open sesame", "same"); // should return true.
confirmEnding("Abstraction", "action"); // should return true.
*/
confirmEnding("Connor", "n"); // should return false.
/*
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // should return false.
confirmEnding("Open sesame", "pen"); // should return false.
confirmEnding("Open sesame", "game"); // should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // should return false.
*/