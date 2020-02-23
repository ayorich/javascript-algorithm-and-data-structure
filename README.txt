This pattern involves creating a window 
which can either be an array or number from one position to another 
Depending on a certain condition, the window either increases or closes (and a new window is created) 
very useful for keeping track of a subset of data in an array/string etc.

This sliding window pattern can be use to find the longest english word in a set of characters
eg. "hellothere"


 Write a function called maxSubarraySum which accepts an array 
of intergers and a number called n. the function should 
calculate the maximum sum of n consecutive elements in the array.

sample solution will result in O(N**2)
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

 maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);