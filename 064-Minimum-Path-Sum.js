/**
 * https://leetcode.com/problems/minimum-path-sum/description/
 * Difficulty:Medium
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 * Example 1:
 * [
 *  [1,3,1],
 *  [1,5,1],
 *  [4,2,1]
 * ]
 * Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.
 */

跟062，063一起看
dp[i][j]表示0，0到i，j的最小和
对于dp[i][j]其解应该是Math.min(dp[i-1][j], dp[i][j-1]) 再加上当前的值

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const dp = [];
    while(dp.push(new Array(m)) < n);
    
    dp[0][0] = grid[0][0];
    
    for(let i = 1; i < m; i++) {
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }
    
    for(let i = 1; i < n; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    
    return dp[n-1][m-1];
};
