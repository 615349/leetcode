/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Difficulty:Easy
 *
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 *
 * For example,
 * Given input array nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
要求是不能创建一个新的数组，否则就太简单了
var removeDuplicates = function(nums) {
    let result = []
    
    for(let i = 0; i < nums.length; i++) {
        if(result.includes(nums[i])) {
            continue;
        } else {
            result.push(nums[i])
        }
    }
    
    return result.length;
};

可以直接修改数组，那么直接跟相邻的比较。唯一的tricky是考虑[1, 1, 1]，所以需要做一个i--

var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
