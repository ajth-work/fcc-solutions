function rangeOfNumbers(startNum, endNum) {
    // if startNum & endNum are same value and equal 0 when substracted, return original value.
    if (endNum - startNum === 0){
    return [startNum]; 
    } else {
    // otherwise, create an array recursively, substracting 1 from end number
    var rangeArray = rangeOfNumbers(startNum, endNum - 1);
    console.log("[ endNum current value = ", endNum,"]")
    console.log(endNum, "Subtracting 1", "with result of", (endNum - 1))
    console.log("Reporting [rangeArray] of", rangeArray)
     console.log("--------------------")
    // push result of (endNum - 1) to array, filling range once 
    rangeArray.push(endNum)
    return rangeArray;
    // repeat for all numbers between startNum and endNum, and return
    }

};


console.log(rangeOfNumbers(1,5));
//console.log(rangeOfNumbers(6,9));
//console.log(rangeOfNumbers(4,4));