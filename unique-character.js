// Is Unique: Implement an algorithm to determine if a string has all unique characters.
//  What if you cannot use additional data structures?

function isUniqueChars(s) {
  if (s.length > 128) return false;
  let char_set = new Array(128).fill(false);

  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    if (char_set[char]) {
      return false;
    }
    char_set[char] = true;
  }

  return true;
}

// space complexity O(1)
// time complexity O(n)
