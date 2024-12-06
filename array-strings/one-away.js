// One Away: There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true pale,
// bake -> false

// 1. conditions for if replace,insert,remove
//2. if replace, compare string if not same, founddifference, if not same again return false
//3. if insert/remove, run while loop conditioned to words length
//4. compare each letters, if not equal increase one index else increase both

function replaceEdit(word1, word2) {
  let foundDiff = false;
  for (let i = 0; i < word1.length; i++) {
    if (word1.charAt(i) !== word2.charAt(i)) {
      if (foundDiff) {
        return false;
      }
      foundDiff = true;
    }
  }
  return true;
}

function insertEdit(word1, word2) {
  let index1 = 0;
  let index2 = 0;

  while (index1 <= word1.length && index2 < -word2.length) {
    if (word1.charAt(index1) !== word2.charAt(index2)) {
      if (index1 !== index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
}

function oneEditAway(word1, word2) {
  if (word1.length === word2.length) {
    return replaceEdit(word1, word2);
  } else if (
    word1.length - 1 === word2.length ||
    word1.length + 1 === word2.length
  ) {
    return insertEdit(word1, word2);
  }
  return false;
}
