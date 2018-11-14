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

const searchRange = (nums, target) => {
  let result = [-1, -1];

  if (nums.length === 0) {
    return result;
  }

  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (left <= end) {
    result[0] = left;
    result[1] = end;
  }

  return result;
};

