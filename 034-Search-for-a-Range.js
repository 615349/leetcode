/**
 *
 * https://leetcode.com/problems/search-for-a-range/description/
 * Difficulty:Medium
 *
 * Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

要求复杂度是o(logn)的一定是使用binary search 二分法
因为是已经排序好的递增数组，那么使用两次二分法，
第一次找到左边的区间，第二次找到右边的区间



const getBoundary = (nums, target, boundary) => {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  let result = -1;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) {
      result = mid;
      if (boundary === 'left') {
        right = mid - 1;
      } else if (boundary === 'right') {
        left = mid + 1;
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

const searchRange = (nums, target) => {
  if (nums.length === 0) {
    return [-1, -1];
  }

  const left = getBoundary(nums, target, 'left');
  const right = getBoundary(nums, target, 'right');
  return [left, right];
};

