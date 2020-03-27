function findLongestWordLength(str) {
  str = str.split(" ")
  let arr = [];
  for (let i = 0; i < str.length; i++) {
  arr.push(str[i].length);
  }
  function compareNumbers(a, b){
    return a - b
    };
  console.log(arr.reverse(arr.sort(compareNumbers)));
  console.log(arr[0])
  return arr[0];
  //return str[i].length;
}
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");