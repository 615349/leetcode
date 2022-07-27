/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * Difficulty:Medium
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

题目的要求是入参是一个变形过的数组，和一个target
在这个变形过的数组里找到target

数组是这样变形的： 一个递增的数组，可能会向右边移动一定的位数。比如 1 2 3 4 -> 2 3 4 1
可以确定的一点是，找到中点，其左边或右边一定有一边是递增的

具体来说，假设数组是A，每次左边缘为l，右边缘为r，还有中间位置是m。在每次迭代中，分三种情况：
（1）如果target==A[m]，那么m就是我们要的结果，直接返回；
（2）如果A[m]<A[r]，那么说明从m到r一定是有序的（没有受到rotate的影响），那么我们只需要判断target是不是在m到r之间，如果是则把左边缘移到m+1，否则就target在另一半，即把右边缘移到m-1。
（3）如果A[m]>=A[l]，那么说明从l到m一定是有序的，同样只需要判断target是否在这个范围内，相应的移动边缘即可。

var search = function(nums, target) {
    const { length } = nums;
    
    if (length === 0) {
        return -1;
    }
    
    let l = 0;
    let r = length - 1;
    let m;
    
    while(l <= r) {
        m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            return m;
        }
        if (nums[m] < nums[r]) {
            if (target > nums[m] && target <= nums[r]) {
                l = m+1;
            } else {
                r = m-1;
            }
        } else {
            if (target >= nums[l] && target < nums[m]) {
                r = m-1;
            } else {
                l = m+1
            }
        }
    }
    
    return -1;
};
