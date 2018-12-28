Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

跟045一起看

使用一个dp数组记录从0到i能否到达。返回的结果是dp[n - 1]

如果在0到n-1的过程中，如果某个点不能到达，就应该立即返回false
比如
[0,2,3]

var canJump = function(nums) {
    if (!nums || nums.length < 2) {
        return true;
    }
    
    const n = nums.length;
    
    const dp = new Array(n).fill(false);
    dp[0] = true;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if (j + nums[j] >= i) {
                dp[i]  = true;
                break;
            }
        }
        
        if(dp[i] === false) return false;
    }
        
    return dp[n - 1];
};
