function getIndexToIns(arr, num) {
  console.log("arr =", arr)
  console.log("num =", num)
  if (arr.length == 0) {
    console.log("NOTE: Array is empty...")
    answer = 0;
  } else arr = arr.sort(function (a, b) { return a - b });
  let finalIndexPosition = arr.length - 1;
  let finalIndexValue = arr[finalIndexPosition];
  let answer;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] < num) {
      i++;
      if (num <= arr[i]) {
      answer = (arr.indexOf(arr[i]));
      console.log("NOTE: Can be fit within Arr")
      }
    } if (num <= arr[0]) {
      console.log("NOTE: Smaller than or Equal to Smallest Number in Arr")
      answer = 0;
      break;
    } else if (num > finalIndexValue) {
      console.log("NOTE: Bigger than Biggest Number in Arr")
      answer = finalIndexPosition + 1;
      break;
    }
  }
  console.log("-----------")
  console.log("Answer =", answer)
  console.log("-----------")
  return answer;
}

getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2.
getIndexToIns([40, 60], 50); // should return 1.
getIndexToIns([3, 10, 5], 3); // should return 0. - WORKING
getIndexToIns([5, 3, 20, 3], 5); // should return 2.
getIndexToIns([2, 20, 10], 19); // should return 2. - 
getIndexToIns([2, 5, 10], 15); // should return 3.
getIndexToIns([], 1); // should return 0. - 