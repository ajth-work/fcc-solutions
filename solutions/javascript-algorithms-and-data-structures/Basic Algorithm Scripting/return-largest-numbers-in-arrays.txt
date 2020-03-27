function largestOfFour(arr) {
  console.log("Full Array =", arr)

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {

    let largest;
    function compareNumbers(a, b) {
    return a - b;
    }
    console.log("------------")
    console.log("Sorted Sub-Array #", i + 1, "=", arr[i] = arr[i].sort(compareNumbers))
    console.log("Items in newArr =", newArr.push(arr[i][arr.length - 1]));
    console.log("Current Contents of newArr =", newArr);
  }
  console.log("~ ~ ~ ~ ~ ~ ~") 
  console.log("Finished");
  console.log("Final Contents of newArr =", newArr)
  console.log("~ ~ ~ ~ ~ ~ ~") 
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);  // should return an array.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);  // should return [27, 5, 39, 1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);  // should return [9, 35, 97, 1000000].
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);  // should return [25, 48, 21, -3].
