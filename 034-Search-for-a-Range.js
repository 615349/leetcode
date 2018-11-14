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



class SearchRange {
    public int[] searchRange(int[] nums, int target) {
        int upper = upperOrLower(nums, target, true);
        int lower = upperOrLower(nums, target, false);
        return new int[]{lower,upper};
    }

    int upperOrLower(int[] nums, int target, boolean upper){
        int left = 0;
        int right = nums.length - 1;
        int res = -1;
        int mid;
        while(left <= right){
            mid = left + (right - left) / 2;
            if(nums[mid] == target){
                res = mid;
                if(upper){
                    left = mid + 1;
                }else right = mid - 1;
            }
            else if(nums[mid] > target) right = mid -1;
            else left = mid + 1;
        }
        return res;
    }
}

