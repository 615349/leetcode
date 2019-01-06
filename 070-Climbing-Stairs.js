You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

每次只能爬一格或者两格
典型的dp
dp[i]表示到i的unique ways
i点只能通过两个方式到达，i-1点跳一格，i-2点跳两格，所以
dp[i] = dp[i-1] + dp[i-2]

var climbStairs = function(n) {
    if (n <= 3) {
        return n;
    }
    
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
};
