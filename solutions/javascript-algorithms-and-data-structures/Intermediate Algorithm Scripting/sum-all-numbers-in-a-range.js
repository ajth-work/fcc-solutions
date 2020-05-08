function sumAll(arr) {
  let sum = [...arr];
  
  function compareNumbers(a, b) {
    return a - b
  };
  sum = sum.sort(compareNumbers)
  
  let listedSum = [];
  for (let i = sum[0]; i <= sum[1]; i++) {
    listedSum.push(sum[0]++);
  }

  function totalSum(total, num) {
    return total + num
  }
  let answer = listedSum.reduce(totalSum);
  
  console.log("Answer =", answer)
  console.log("-----------------")
  return answer;
}
