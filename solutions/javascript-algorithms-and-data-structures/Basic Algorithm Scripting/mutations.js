function mutation(arr) {
  console.log("================");
  console.log(arr);
  console.log("================");

  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();
  let result;

  for (let i = 0; i < arr2.length; i++) {
    let resultDetails = arr2[i];
    if (arr1.indexOf(arr2[i]) < 0) {
      result = false;
      console.log(resultDetails, "Failed");
      break;
    }
    if (arr1.indexOf(arr2[i]) >= 0) {
      result = true;
      console.log(resultDetails, "Matched");
    }
  }
  console.log("Result =", result)
  return result;
}

//mutation(["hello", "hey"]); // should return false.
//mutation(["hello", "Hello"]); // should return true.
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should return true.
//mutation(["Mary", "Army"]); // should return true.
//mutation(["Mary", "Aarmy"]); // should return true.
//mutation(["Alien", "line"]); // should return true.
//mutation(["floor", "for"]); // should return true.
mutation(["hello", "neo"]); // should return false.
mutation(["voodoo", "no"]); // should return false.
//mutation(["ate", "date"]); // should return false.
//mutation(["Tiger", "Zebra"]); // should return false.
//mutation(["Noel", "Ole"]); // should return true.