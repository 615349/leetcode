/**
 * https://leetcode.com/problems/two-sum/description/
 * Difficulty:Easy
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

the algorithm is to create an object, or map, and then loop over the array
if the number of the array as the key is not existed in the map, make the number as key, and the index of the array as value
for example:
map = {
   2: 0
}
for the next iteration, check if target - the new iterated number is existed as key. if so, we haveve found the two numbers

var twoSum = function (numbers, target) {
    var map = {};
    for (var i = 0; i < numbers.length; i++) {
        var n = numbers[i];
        if (map[target - n] !== undefined) {
            return [map[target - n], i];
        } else {
            map[n] = i;
        }
    }
};

或者使用map实现
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, nums.indexOf(target - nums[i])];
        } else {
            map.set(nums[i], true);
        }
    };
};


另外一种方法是，将数组排序（注意，排序会改变数组本身的，所以需要先保存一下原数组）
然后用两个指针，一个在头上，一个在尾巴，如果等于就保存两个index，如果小于target，则左边指针向右边移动，反之右边指针向左边移动
拿到两个index之后，在原来数组查找这两个值原来的index
var twoSum = function(nums, target) {
  const origNums = [...nums];
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;

  let left, right;

  while (i < j) {
    if (nums[i] + nums[j] === target) {
      left = i;
      right = j;
      break;
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  let result = [];
  origNums.forEach((num, index) => {
    if (num === nums[left] || num === nums[right]) {
      result.push(index);
    }
  });
  return result;
};

