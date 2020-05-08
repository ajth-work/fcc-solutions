function repeatStringNumTimes(str, num) {
let newStr = "";
if (num >= 0) {
  for (let i = 0; i < num; i++) {
    newStr = newStr + str;
    } return (newStr);
    } else {
      return "";
      }
}

repeatStringNumTimes("*", 3); // should return "***".
repeatStringNumTimes("abc", 3); // should return "abcabcabc".
repeatStringNumTimes("abc", 4); // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1); // should return "abc".
repeatStringNumTimes("*", 8); // should return "********".
repeatStringNumTimes("abc", -2); // should return "".
repeatStringNumTimes("abc", 0); // should return "".