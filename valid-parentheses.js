/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parentheses = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const stack = [];

  for (const char of s) {
    if (Object.keys(parentheses).includes(char)) {
      stack.push(char);
    } else if (parentheses[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
};
