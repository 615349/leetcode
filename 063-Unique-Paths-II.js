/**
 * https://leetcode.com/problems/unique-paths-ii/description/
 * Difficulty:Medium
 *
 * Follow up for "Unique Paths":
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * For example,
 * There is one obstacle in the middle of a 3x3 grid as illustrated below.
 * [
 *  [0,0,0],
 *  [0,1,0],
 *  [0,0,0]
 * ]
 * The total number of unique paths is 2.
 * Note: m and n will be at most 100.
 */


跟062类似，不同点：
1，第一行和第一列的初始化的时候，需要看dp前一个值是否已经是0了（说明障碍在之前的某个点）
2，在双重循环中只需要直接看当前点是否是障碍，不同管之前的点

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;
    
    const dp = [];
    while(dp.push(new Array(m)) < n);
    
    dp[0][0] = 1 ^ obstacleGrid[0][0];

    //[0][0]已经初始化过了  
    for(let i = 1; i < m; i++) {
        if (dp[0][i-1] === 1 && obstacleGrid[0][i] === 0) {
            dp[0][i] = 1;
        } else {
            dp[0][i] = 0;
        }
    }
    
    for(let i = 1; i < n; i++) {
        if (dp[i-1][0] === 1 && obstacleGrid[i][0] === 0) {
            dp[i][0] = 1;
        } else {
            dp[i][0] = 0;
        }
    }
    
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    
    return dp[n-1][m-1]
};
