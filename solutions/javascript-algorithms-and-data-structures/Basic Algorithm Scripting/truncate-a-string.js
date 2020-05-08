function truncateString(str, num) {
  if (str.length > num) {
    str = str.slice(0,num);
    str = str.concat("...")
  }
  console.log(str)
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
