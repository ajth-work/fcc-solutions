const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
let answer;
const half = ({max, min}) => {
  answer = ((max + min) / 2.0);
  return answer;
}
// Only change code above this line
console.log(half(stats))