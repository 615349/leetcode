/**
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 * Difficulty:Medium
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 * For example,
 * Given [10, 9, 2, 5, 3, 7, 101, 18],
 * The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.
 * Your algorithm should run in O(n2) complexity.
 * Follow up: Could you improve it to O(n log n) time complexity?
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

这里求的不是连续的，是可以断开的。对于dp而言，dp[i]表示index到i为止的最长递增子字符串（LIS）
如何求dp[i]呢，是0到i-1范围内最大的lis + 1
所以先对数组进行0 ～ n-1的循环，然后在循环内，对于0到i-1循环，只要nums[i] > nums[j], 那么dp[i] = dp[j] + 1。但是不同的dp[j]的大小是不一样的，所以需要求最大值

最后得到了dp[i]

最后的答案就是dp数组里的最大值

https://www.youtube.com/watch?v=7DKFpWnaxLI

var lengthOfLIS = function(nums) {
    const { length } = nums;
    if (length < 2) {
        return length;
    }
    
    let max = 1;
    const dp = new Array(length).fill(1);
    for(let i = 1; i < length; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                max = Math.max(dp[i], max);
            }
        }
    }
    return max;
};
