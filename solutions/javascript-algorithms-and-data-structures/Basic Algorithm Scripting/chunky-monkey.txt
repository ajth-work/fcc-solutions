function chunkArrayInGroups(arr, size) {
  // Make copy of arr, and create a blank array for adding the groupings to
  let arrCopy = [...arr];
  let newArray = [];
  console.log("arrCopy =", arrCopy)
  console.log("newArray =", newArray)

  // create a loop where a groupig is made from the beginning of arr to the length designated by the size parameter and the remaining numbers that dont fit the grouping size are appended to the end in a final subarray.
  for (let i = 0; i < arrCopy.length / size; i++) {
    // extract the first grouping from arrCopy 
    let arr2 = arrCopy.splice(0, size)
    console.log("arr2 =", arr2)
    console.log("arr2.length =", arr2.length)
    console.log("size =", size)

    // while grouping size is equal to the parameter size, push it to the (once blank) newArray
    while (arr2.length == size) {
      newArray.push(arr2)
      console.log("newArray =", newArray)
      arr2 = arrCopy.splice(0, size)
    }

    // once grouping equal to size cannot be made, extract the remainder and add to array called remainder
    let remainder = arr2.splice(0)
    console.log("Remainder =", remainder)


    // if remainder array is not empty, so push the remainder array to the end of the newArray, and return the  completed newArray.
    if (remainder != "") {
      newArray.push(remainder)
      console.log("Final Result =", newArray)
      console.log("--------------")
      return newArray
    }

    // else remainder is empty because of no remainder, return the completed newArray
    else {
      console.log("Final Result =", newArray)
      console.log("--------------")
      return newArray
    }
  }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].