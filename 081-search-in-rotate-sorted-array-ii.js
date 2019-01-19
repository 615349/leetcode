Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?


pivot: [pivət]
compared with 033, the difference is that the nums may contain duplicated nums.
e.g.
nums=[1,1,3,1], target = 3
if check how 033 is handled, that way doesn't work in 081

OK, let's work out another way

let's find the pivot
[5,6,1,2,3,4]
the pivot is 1, which is next to the larget number in the array

from pivot to nums.length - 1, must be ascended
from 0 to pivot-1, must be ascended

if pivot is not found, which means the array is always ordered



const sortedBinarySearch = (nums, target) => {
    let l = 0,
        r = nums.length - 1,
        m;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            return true;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return false;
};

var search = function(nums, target) {
    if (!nums || nums.length === 0) {
        return false;
    }

    const m = nums.length;

    if (target === nums[0] || target === nums[m - 1]) {
        return true;
    }

    if (m === 1) {
        return target === nums[0];
    }

    let pivot = -1;
    for (let i = 1; i < m; i++) {
        if (nums[i] < nums[i - 1]) {
            pivot = i;
        }
    }

    if (pivot === -1) {
        return sortedBinarySearch(nums, target);
    }

    if (nums[pivot] === target) {
        return true;
    } else if (target > nums[pivot] && target < nums[m - 1]) {
        return sortedBinarySearch(nums.slice(pivot), target);
    } else {
        return sortedBinarySearch(nums.slice(0, pivot), target);
    }
};



