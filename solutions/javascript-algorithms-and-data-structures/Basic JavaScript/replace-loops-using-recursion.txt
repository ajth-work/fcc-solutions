function sum(arr, n) {
  // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}

console.log(sum([1], 0)); // should equal 0.
console.log(sum([2, 3, 4], 1)); // should equal 2.
console.log(sum([2, 3, 4, 5], 3)); // should equal 9.