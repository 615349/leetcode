/**
 * https://leetcode.com/problems/unique-paths/
 * Difficulty:Medium
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 * Note: m and n will be at most 100.
 *
 */


典型的dp题
由于机器人只能向下或者向右，设立dp[i][j]，其表示从[0][0]到[i][j]的路径数
dp[i][j] = dp[i-1][j] + dp[i][j-1], 因为i，j这一点能且只能从其上面或者左面过来，所以把左边和上边两个点的dp值相加就可以了

另外对于第一行dp[0][i]，其值一定是1，因为如果机器人和终点在同一行，而又其只能向右或者向下，那只能就有一个解，就是一直向右
同理，对于dp[i][0]也一样

var uniquePaths = function(m, n) {
    const dp = [];
    while(dp.push(new Array(m)) < n);
    
    for(let i = 0; i < m; i++) {
        dp[0][i] = 1;
    }
    
    for(let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }
    
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    
    return dp[n-1][m-1]
};
