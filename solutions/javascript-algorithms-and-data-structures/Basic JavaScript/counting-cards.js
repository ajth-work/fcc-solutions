var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count = count + 1;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count = count - 1;
      break;
  }

  if (count > 0) {
    console.log(count + " Bet")
    return count + " Bet";
  }
  else {
    console.log(count + " Hold")
    return count + " Hold";
    // Only change code above this line
  }
}

cc(10); cc("J"); cc("Q"); cc("K"); cc("A");