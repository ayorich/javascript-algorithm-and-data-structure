/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    console.log(numToIndex);
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }

  return [];
};

function twoSum(nums, target) {
  const numIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndexMap[complement] !== undefined) {
      return [numIndexMap[complement], i];
    }
    numIndexMap[nums[i]] = i;
  }

  return []; // No solution found
}

// Example:
let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(
  'Indices of the two numbers that add up to',
  target,
  'are:',
  result
);
