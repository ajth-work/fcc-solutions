function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        arr.push(["A", "T"]);
        break;
      case "T":
        arr.push(["T", "A"]);
        break;
      case "C":
        arr.push(["C", "G"]);
        break;
      case "G":
        arr.push(["G", "C"]);
        break;
    }
  }
  console.log(arr)
  return arr;
}

pairElement("GCG");
