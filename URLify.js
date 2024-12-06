// URLify: Write a method to replace all spaces in a string with '%20'.
//  You may assume that the string has sufficient space at the end to hold the additional characters,and
//  that you are given the "true" length of the string.
//  (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"

//steps
// 1 count number of spaces
//2 get string output size
//3.split the string
//4. loop through array.
//5 replace empty with %20 or fix string in right position

function urlify(str, trueLength) {
  // 1 count number of spaces
  let spaceCount = 0;
  for (let i = 0; i < trueLength; i++) {
    if (str[i] == ' ') {
      spaceCount++;
    }
  }

  //2 get string output size
  let index = trueLength + spaceCount * 2;

  //3.split the string
  let arr = str.split('');

  //4. loop through array.
  for (i = trueLength - 1; i >= 0; i--) {
    //5 replace empty with %20 or index with str
    if (arr[i] === ' ') {
      arr[index - 1] = '0';
      arr[index - 2] = '2';
      arr[index - 3] = '%';
      index -= 3;
    } else {
      arr[index - 1] = arr[i];
      index--;
    }
  }
  return arr.join('');
}
// space complexity O(1)
// time complexity O(n)

function urlify(str, trueLength) {
  let urlified = '';
  for (let i = 0; i < trueLength; i++) {
    if (str[i] === ' ') {
      urlified += '%20';
    } else {
      urlified += str[i];
    }
  }
  return urlified;
}

function urlify(str) {
  // Use built-in replace method with a regular expression to replace all spaces
  return str.replace(/\s/g, '%20');
}

function urlify(str) {
  // Split the string on spaces, then join the resulting array with '%20'
  return str.trim().split(' ').join('%20');
}
