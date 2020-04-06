function titleCase(str) {
  console.log("Original String = (", str,")" )
  str = str.toLowerCase();
  let initialArr = str.split(" ");
  let finalArr = [];
  for (let i = 0; i < initialArr.length; i++) {
    let str2;
    console.log("First letter of word [", initialArr[i], "] = ", str2 = initialArr[i][0].toUpperCase())
    finalArr.push(str2.concat(initialArr[i].slice(1)))
  }
  console.log("Result of titleCase = (", finalArr = finalArr.join(" "), ")")
  console.log("---------------------")
  return finalArr
}

titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt"); // should return "Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // should return "Here Is My Handle Here Is My Spout".