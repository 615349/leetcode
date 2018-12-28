Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.

可以跟055一起做

注意，数组元素是在该位置最大的跳跃数，也就是说可以跳跃1，也可以跳跃num[i]

有很多的方法，prefer dp
dp[i]表示从0到i最少需要多少步

dp[0]肯定就是0了，dp[length - 1]就是所需的答案。那么怎么给dp[i]赋值呢？
有一个特点可以利用，如果j + num[j] >= i, 那么dp[i] = dp[j] + 1。
为什么呢？因为我是从0开始循环的，所以dp[0], dp[1]这些都是最优解
所以如果j + num[j] >= i, 那么从j到i只要跳一步就可以了，既然dp[j]是最优解
那么dp[i] = dp[j] + 1就一定也是最优解了, 并且可以break(没有break不能过)

var jump = function(nums) {
    if (!nums || nums.length < 2) {
        return 0;
    }
    
    const n = nums.length;
    
    const dp = new Array(n).fill(0);
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if (j + nums[j] >= i) {
                dp[i] = dp[j] + 1;
                break;
            }
        }
    }
    
    return dp[n - 1];
};


