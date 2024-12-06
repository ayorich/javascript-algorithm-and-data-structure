var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');

  return str === str.split('').reverse().join('');
};

var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
  if (str.length === 0) return true;

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    let leftChar = str.charAt(left);
    let rightChar = str.charAt(right);

    if (leftChar !== rightChar) return false;
    left++;
    right--;
  }

  return true;
};
