function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

reverseString("hello"); // should return a string.
reverseString("hello"); // should become "olleh".
reverseString("Howdy"); // should become "ydwoH".
reverseString("Greetings from Earth"); // should return "htraE morf sgniteerG".