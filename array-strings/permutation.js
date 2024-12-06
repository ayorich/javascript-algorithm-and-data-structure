// Given two strings,write a method to decide if one is a permutation of the
// other.

function isPermutation(s, t) {
  if (s.length !== t.length) return false;

  let char_set = new Array(128).fill(0);

  for (let i = 0; i < s.length; i++) {
    let val = s.charCodeAt(i);

    char_set[val]++;
  }

  for (let i = 0; i < t.length; i++) {
    let val = s.charCodeAt(i);
    char_set[val]--;
    if (char_set[val] < 0) {
      return false;
    }
  }

  return true;
}
// space complexity O(1)
// time complexity O(n)

function sorter(str) {
  return str.split('').sort().join('');
}

function isPermutation(s, t) {
  if (s.length !== t.length) return false;

  return sorter(s) == sorter(t);
}

// space complexity O(n)
// time complexity O(n log n)
