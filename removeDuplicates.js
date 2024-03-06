/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

let nums = [1, 1, 2, 2, 3, 4, 4, 4, 5];
let length = removeDuplicates(nums);
console.log('Length :', length);
console.log('Array :', nums.slice(0, length));

[1, 1, 2, 2, 3, 4, 4, 4, 5]
    ij
    j  i
[1, 2, 2, 2, 3, 4, 4, 4, 5]    
       j  i  
       j     i
[1, 2, 3, 2, 3, 4, 4, 4, 5]
          j     i
[1, 2, 3, 4, 3, 4, 4, 4, 5]
             j     i
             j        i
             j           i
[1, 2, 3, 4, 5, 4, 4, 4, 5]
              j

              return j