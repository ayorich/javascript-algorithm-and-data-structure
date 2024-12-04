// Complexity
// Time complexity: O(m+n)
// We are iterating through both arrays once, so the time complexity is O(m+n).

// Space complexity: O(1)
// We are not using any extra space, so the space complexity is O(1).

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

// Complexity
// Time complexity: O((m+n)log(m+n))
// due to the sort() function

// Space complexity: O(1)
// We are not using any extra space, so the space complexity is O(1).
var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
};
