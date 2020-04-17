// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
    // if the future value is going to be blank (""), therefore deleted
    if (value === "") { 
    delete collection[id][prop];
    // if its a track, add it to an empty array or to the end of exisiting array
      } else if(prop === "tracks") {
        // || [] creates array if doesnt exist, then use push for new values with array
        collection[id][prop] = collection[id][prop] || []; 
        // needs array or an empty array from previous line to manipulate
        collection[id][prop].push(value); 
        } else collection[id][prop] = value; // updates value for non-tracks
  return collection;
}