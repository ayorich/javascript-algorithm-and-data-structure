// Implement a method to perform basic string compression using the counts of repeated characters.
//  For example, the string aabcccccaaa would become a2blc5a3.
//  If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

//METHOD 1
function stringCompression(str) {
  let compressed = [];
  let consecutiveCount = 0;

  for (let i = 0; i < str.length; i++) {
    consecutiveCount++;
    if (i + i >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressed.push(str[i]);
      compressed.push(consecutiveCount);
      consecutiveCount = 0;
    }
  }

  let compressedString = compressed.join('');

  return compressedString.length < str.length ? compressedString : str;
}

//METHOD 2
function stringCompression(str) {
  let finalLength = countCompression(str);
  if (finalLength >= str.length) return str;

  let compressed = [];
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;
    if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressed.push(str.charAt(i));
      compressed.push(countConsecutive);
      countConsecutive = 0;
    }
  }
  return compressed.join('');
}

function countCompression(str) {
  let compressedLength = 0;
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;
    if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      compressedLength += 1 + String(countConsecutive).length;
      countConsecutive = 0;
    }
  }
  return compressedLength;
}

console.log(stringCompression('aaabb')); // Outputs: a3b2
console.log(stringCompression('abcd')); // Outputs: a1b1c1d1
