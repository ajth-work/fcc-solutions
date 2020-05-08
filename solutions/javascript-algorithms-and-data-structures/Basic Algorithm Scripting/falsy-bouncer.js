function bouncer(arr) {
  let checkBoolean = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(
      "arr[", i + 1, "] = (", arr[i], 
      ") ... Boolean Status = (", Boolean(arr[i]) == true, ")"
      )
    if (Boolean(arr[i]) == true) {
      checkBoolean = checkBoolean.concat(arr[i])
    }
  }
  console.log("-----RESULT-----")
  console.log(checkBoolean)
  return checkBoolean;

}

bouncer([7, "ate", "", false, 9]);
