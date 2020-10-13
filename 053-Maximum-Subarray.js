/**
 * https://leetcode.com/problems/maximum-subarray/description/
 * Difficulty:Easy
 *
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 *
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

肯定是利用dp了

可以这样想，要得到某一段区间的和，可以想到：
a，如果到i的某一段区间和sum大于0，那这段区间应该和nums[i]拼接得到更大的区间
b，如果sum < 0, 则sum舍弃之前的结果，从当前的nums[i]开始重新计算
c，可以不用数组来存储sum，因为就一个变量，完全可以用节约空间的方式完成
d，如果要求得这段区间开始和结束的index，也很容易，就是下面代码的start和end

var maxSubArray = function(nums) {
    let sum = 0;
    let max = 1 << 31;
    let start = 0, end = 0;
    for(let i = 0; i < nums.length; i++) {
        if (sum >= 0) {
            // 这里肯定不是start，因为之前的sum已经为正了
            sum += nums[i];
        } else {
            // 如果之前的sum小于0，那么假设从这个点开始就是start
            sum = nums[i];
            start = i;
        }
        
        if (sum > max) {
            max = sum;
            end = i;
        }
    }
    return max;
};


// 13/10/2020 更新
https://www.youtube.com/watch?v=7J5rs56JBs8
如果使用dp的话，可以这样考虑
建立一个dp[i]，其代表的意思是数组的index从某个值，到i的最大的sum
那么dp[i+1]的求法就是 if dp[i] > 0, dp[i+1] = dp[i] + arr[i+1]. if dp[i] < 0, 那我肯定舍弃之前的结果dp[i+1] = arr[i+1]

arr [-2, 1, -3, 4, -1, 2, 1, -5, 4]
dp   -2, 1, -2, 4,  3, 5, 6,  1, 5

var maxSubArray = function(nums) {
    const f = new Array(nums.length).fill(0);
    
    f[0] = nums[0];
    let max = f[0];
    for(let i = 1; i < nums.length; i++) {
        if (f[i-1] > 0) {
            f[i] = f[i-1] + nums[i];
        } else {
            f[i] = nums[i]
        }
        
        max = Math.max(max, f[i]);
    }
    
    return max;
};
