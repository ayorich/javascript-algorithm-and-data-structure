
//POWER SOLUTION
//A FUNCTION THAT TAKES THE BASE AND EXPONENT OF A NUMBER TO GIVES ITS POWER OF ITS BASE
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 3))


//FACTORIAL SOLUTION
// FUNCTION FOR FACTORIAL OF A NUMBER
function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
 console.log(factorial(5))

//PRODUCT OF ARRAY SOLUTION
// FUNCTION THAT SOLVES THE PRODUCT OF NUMBERS IN AN ARRAY
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1,5,7,8]))

//RECURSIVE RANGE SOLUTION
//SUM OF NUMBER TO ZERO RANGE
function recursiveRange(x) {
    if (x === 0) return 0;
    return x + recursiveRange(x - 1);
}
console.log(recursiveRange(4))

//FIBONACCI SOLUTION
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}







// RECURSION CHALLENGE SECTION SOLUTIONS
// Reverse Solution

// function reverse(str) {
//     if (str.length <= 1) return str;
//     return reverse(str.slice(1)) + str[0];
// }
// isPalindrome Solution

// function isPalindrome(str) {
//     if (str.length === 1) return true;
//     if (str.length === 2) return str[0] === str[1];
//     if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
//     return false;
// }
// someRecursive Solution

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1), callback);
// }
// flatten Solution

// function flatten(oldArr) {
//     var newArr = []
//     for (var i = 0; i < oldArr.length; i++) {
//         if (Array.isArray(oldArr[i])) {
//             newArr = newArr.concat(flatten(oldArr[i]))
//         } else {
//             newArr.push(oldArr[i])
//         }
//     }
//     return newArr;
// }


