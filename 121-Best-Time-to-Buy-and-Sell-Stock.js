/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * Difficulty:Easy
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction
 * (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 *
 * Example 1:
 * Input: [7, 1, 5, 3, 6, 4]
 * Output: 5
 * max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
 *
 * Example 2:
 * Input: [7, 6, 4, 3, 1]
 * Output: 0
 * In this case, no transaction is done, i.e. max profit = 0.
 */

https://github.com/615349/leetcode/blob/master/053-Maximum-Subarray.js
跟053基本相似
考虑使用dp的方法。
要得到最大的profit，就是arr[i]-之前最小的一个数
arr [7, 1, 5, 3, 6, 4]
dp   7, 1, 1, 1, 1, 1
max  0  0  4  2  5  3
所以只要额外设置一个max值，来比较prices[i] - dp[i]的最大值

dp[i]表示数组到index为i为止的最小的数，最大的profit就是prices[i] - dp[i]

因为题目要求最少也要返回0，所以设置max=0



var maxProfit = function(prices) {
    const dp = new Array(prices.length).fill(0);
    
    dp[0] = prices[0];
    let max = 0;
    for(let i = 1; i < prices.length; i++) {
        dp[i] = Math.min(dp[i-1], prices[i]);
        max = Math.max(prices[i] - dp[i], max);
    }
    
    return max;
};


