// Given a string, write a function to check if it is a permutation of a palin­ drome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)

//1.create a hash map for valid characters i.e letters a-z
//2.map the string[must be lowercase constrain]
//3. check the charCodeAt of each string
//4. if not -1 increase count of character ,if increased count is odd increase oddcount else reduce addcount
//5. return true if countodd is greater than one or otherwise

function getCharCodePosition(char) {
  let start = 'a'.charCodeAt(0);
  let end = 'z'.charCodeAt(0);
  let val = char.charCodeAt(0);

  if (val >= start && val <= end) {
    return val - start;
  }
  return -1;
}
function palindromePermutation(str) {
  let table = new Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0);
  let countOdd = 0;
  for (let char of str.toLowerCase()) {
    let pos = getCharCodePosition(char);
    if (pos !== -1) {
      table[pos]++;
      if (table[pos] % 2 === 1) {
        countOdd++;
      } else {
        countOdd--;
      }
    }
  }

  return countOdd <= 1;
}
