function translatePigLatin(str) {
  let firstChunk, endChunk, result;
  firstChunk = str.match(/a|e|i|o|u/i);  

  // if (firstChunk.index == null), add "ay" to the end.
  if (firstChunk == null) {
  result = str + "ay";
  } 
  // if (firstChunk.index > 0), remove first chunk from beginning, then add firstChunk + "ay" to the end. 
  else if (firstChunk.index > 0) {
  endChunk = str.substring(0, firstChunk.index) + "ay";
  result = str.substring(firstChunk.index, str.length) + endChunk;
  } 
  
  // if (firstChunk.index == 0), add "way" to the end.
  else if (firstChunk.index == 0) {
  result = str + "way";
  }
  
  console.log(result);
  return result;
}

// should handle words where the first vowel comes as the second letter of the word.
translatePigLatin("consonant"); // should return "onsonantcay".
translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
// Should handle words where the first vowel comes later than the second letter of the word. 
translatePigLatin("schwartz"); // should return "artzschway".
translatePigLatin("glove"); // should return "oveglay".
//Should handle words without vowels. 
translatePigLatin("rhythm"); // should return "rhythmay".