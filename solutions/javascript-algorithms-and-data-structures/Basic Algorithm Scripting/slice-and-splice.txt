function frankenSplice(arr1, arr2, n) {
  let slicedArr = arr1.slice();
  let splicedArr = arr2.slice();
  splicedArr.splice(n, 0, (slicedArr));
  console.log(splicedArr.flat())
  return splicedArr.flat();
}

frankenSplice([1, 2, 3], [4, 5], 1); // should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1); // should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].