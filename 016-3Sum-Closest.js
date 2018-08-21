/**
 * https://leetcode.com/problems/3sum-closest/description/
 * Difficulty:Medium
 *
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * For example, given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

只需要返回最接近的和就可以
首先对数组进行排序，然后选定一个数，另外进行从这个的右边第一个开始（标记为left），到数组最后一个结束（标记为right），进行比较
如果小于target，则left向右边移动，如果大于，则right向左边移动，如果刚好相等，直接返回结果

用一个变量保存最小的差，返回

public class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int closetSum = 0, minDiff = Integer.MAX_VALUE / 2;
        for(int i = 0; i < nums.length; i++){
            int left = i + 1, right = nums.length - 1;
            while(left < right){
                // 当前组合的和
                int sum = nums[i] + nums[left] + nums[right];
                // 当前组合的和与目标的差值
                int diff = Math.abs(sum - target);
                // 如果差值更小则更新最接近的和
                if(diff < minDiff){
                    closetSum = sum;
                    minDiff = diff;
                }
                // 双指针的移动方法和3Sum一样
                if (sum < target){
                    left++;
                } else if (sum > target){
                    right--;
                } else {
                    return sum;
                }
            }
        }
        return closetSum;
    }
}
