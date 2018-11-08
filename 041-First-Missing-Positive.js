/**
 * https://leetcode.com/problems/first-missing-positive/
 * Difficulty:Hard
 *
 * Given an unsorted integer array, find the first missing positive integer.
 * For example,
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 * Your algorithm should run in O(n) time and uses constant space.
 */

/**
 * 思路介绍
 * 1. 将第 i 个元素放到第 i 个坑
 * 2. 遍历所有的坑, 找到数字不对应的坑
 *
 * 例如
 *     [ 3, 4, -1, 1 ]
 * --> [ -1, 4, 3, 1 ]
 * --> [ -1, 1, 3, 4 ]
 * --> [ 1, -1, 3, 4 ]
 * --> 2
 *
 * @param {number[]} nums
 * @return {number}
 */

这题的难度应该是简单

设置answer为1
如果该数组不包含1，说明1一定是结果
如果有1，那就answer++

任何时候该数组不包含即找到了答案

另外外面的数组循环，只要考虑一个情况：如果数组的元素是1到10怎么办，就知道了

var firstMissingPositive = function(nums) {
    let ans = 1;
    for(let i = 0; i < nums.length; i++) {
        if (nums.includes(ans)) {
            ans++;
        } else {
            break;
        }
    }
    return ans;
};
