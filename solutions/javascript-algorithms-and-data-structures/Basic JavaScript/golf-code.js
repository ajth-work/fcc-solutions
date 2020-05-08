var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  console.log("par", par, "strokes", strokes)
  if (strokes == 1) {
    console.log("Hole-in-one!");
    return "Hole-in-one!"
  } else if (strokes <= par - 2) {
    console.log("Eagle");
    return "Eagle"
  }
  else if (strokes == par - 1) {
    console.log("Birdie");
    return "Birdie"
  } else if (strokes == par) {
    console.log("Par");
    return "Par"
  } else if (strokes == par + 1) {
    console.log("Bogey");
    return "Bogey"
  } else if (strokes == par + 2) {
    console.log("Double Bogey");
    return "Double Bogey"
  } else if (strokes >= par + 3) {
    console.log("Go Home!");
    return "Go Home!"
  }

  else {
    console.log("Broken")
    return "Broken";
  }
  // Only change code above this line
}

golfScore(4, 1); // should return "Hole-in-one!"
golfScore(4, 2); //  should return "Eagle"
golfScore(5, 2); //  should return "Eagle"
golfScore(4, 3); //  should return "Birdie"
golfScore(4, 4); //  should return "Par"
golfScore(1, 1); //  should return "Hole-in-one!"
golfScore(5, 5); //  should return "Par"
golfScore(4, 5); //  should return "Bogey"
golfScore(4, 6); //  should return "Double Bogey"
golfScore(4, 7); //  should return "Go Home!"
golfScore(5, 9); //  should return "Go Home!"