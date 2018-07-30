/**
 * https://leetcode.com/problems/container-with-most-water/description/
 * Difficulty:Medium
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point
 * at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container,
 * such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */

在数组头尾各设立一个变量，i和j
接下来要么i变大，要么j变小
如果height[i] < height[j], 只能i++，这样才有可能面积更大
反之，则j--


var maxArea = function (height) {
    var dp = [0];
    var max = 0;
    for (var i = 1; i < height.length; i++) {
        dp[i] = 0;
        for (var j = 0; j < i; j++) {
            var v = (i - j) * Math.min(height[i], height[j]);
            dp[i] = Math.max(dp[i], v);
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var i = 0;
    var j = height.length - 1;
    var max = 0;
    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) i++;
        else j--;
    }
    return max;
};
