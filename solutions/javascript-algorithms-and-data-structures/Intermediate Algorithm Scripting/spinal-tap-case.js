function spinalCase(str) { 
  str = str.match(/(([A-Z]|[a-z])[a-z]+)/g)
  str = str.join("-")
  str = str.toLowerCase();
  console.log(str)
  return str;
}

spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); // should return "all-the-small-things".