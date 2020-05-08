function diffArray(arr1, arr2) {
  // create a blank array 
  var newArr = [];
  // Push the parameters arr1 and arr2 into the blank array
  newArr.push(arr1, arr2);
  // Flatten the array from 2 subarrays into 1 array
  newArr = newArr.flat();
  // Create another array for the filtered-out unique number and set up function(outer).
  // In function(outer), outer initially equals newArr[0] and is passed to function(inner).
  var newerArr = newArr.filter(function (outer) {
    // In function(inner), inner equals newArr[0] too, checks if outer == inner, counts instance of true, then inner iterates through newArr by 1 and checks outer == inner again. 
    // Note: outer's value iterates by 1 when inner has entirely iterated through newArr.
    return newArr.filter(function (inner) {
      // Since the original arr1 and arr2 arrays contain some of the same numbers, we can expect to see multiple instances where outer == inner.
      return outer == inner;
      // function(outer) then filters newArr and returns unique value to newerArr if true occurred only once.
      // Note: if .length == 1 is changed to .length == 2, values which occured 2 times will be returned.
    }).length == 1;
  });
  console.log("Final Result =", newerArr)
  // return newerArr containing the results of function(outer).
  return newerArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
