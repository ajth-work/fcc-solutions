var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
let newArr = [];
newArr = newArr.concat(globalArray)
let finalArr = newArr.sort();
return finalArr;

  // Only change code above this line
}
nonMutatingSort(globalArray);
