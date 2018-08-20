/**
 * https://leetcode.com/problems/3sum/
 * Difficulty:Medium
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 *
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 * [-1, 0, 1],
 * [-1, -1, 2]
 * ]

 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

三个数之和为0
首先要做的时候排序，因为这样如果有重复的数字，他们就会在一起
其次是选定一个数字（index为i），然后在剩余的i+1一直到len-1之间找到两个数字，加起来为0
贴一段java代码，懒得写js了

public class Solution {
    List<List<Integer>> ret = new ArrayList<List<Integer>>();
    
    public List<List<Integer>> threeSum(int[] num) {
        if (num == null || num.length < 3) return ret;
        
        Arrays.sort(num);
        
        int len = num.length;
        for (int i = 0; i < len-2; i++) {
            if (i > 0 && num[i] == num[i-1]) continue;
            find(num, i+1, len-1, num[i]); //寻找两个数与num[i]的和为0
        }
        
        return ret;
    }
    
    public void find(int[] num, int begin, int end, int target) {
        int l = begin, r = end;
        while (l < r) {
            if (num[l] + num[r] + target == 0) {
                List<Integer> ans = new ArrayList<Integer>();
                ans.add(target);
                ans.add(num[l]);
                ans.add(num[r]);
                ret.add(ans); //放入结果集中
                while (l < r && num[l] == num[l+1]) l++;
                while (l < r && num[r] == num[r-1]) r--;
                l++;
                r--;
            } else if (num[l] + num[r] + target < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
}





var threeSum = function (nums) {

    nums.sort(function (a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    // console.log(nums);
    var ret = [];
    for (var i = 0; i < nums.length - 2; i++) {
        var a = nums[i];
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {

            var j = i + 1;
            var k = nums.length - 1;
            while (j < k) {
                var b = nums[j];
                var c = nums[k];

                var sum = a + b + c;

                // console.log(a, b, c, '=', sum);
                if (sum > 0) k--;
                else if (sum === 0) {
                    ret.push([a, b, c]);
                    while (j < k && nums[j] === nums[++j]);
                    while (j < k && nums[k] === nums[--k]);
                    // j++;
                    // k--;

                }
                else j++;
            }
        }

    }
    return ret;

};
