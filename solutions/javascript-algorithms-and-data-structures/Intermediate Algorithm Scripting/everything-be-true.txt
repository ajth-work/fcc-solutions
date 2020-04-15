function truthCheck(collection, pre) {
  // first step evaluates if item (x) of collection has the property (pre) and steps inward if true
  if (collection.every(x => x.hasOwnProperty(pre))) {
    // if item has property, then checks if property's value is boolean or not
    if (collection.every(x => Boolean(x[pre]))) {
      // log and returns true if Boolean evaluates to true
      console.log(true)
      return true;
    }
  } else
  // else log and returns false if item either A) doesn't have the property or B) property's value is null, undefined, etc.
    console.log(false)
  return false;
}