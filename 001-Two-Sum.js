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
for the next iteration, check if target - the new iterated number is existed as key. if so, we've found the two numbers

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

