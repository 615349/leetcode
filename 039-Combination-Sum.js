/**
 * https://leetcode.com/problems/combination-sum/description/
 * Difficulty:Medium
 *
 * Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
 * The same repeated number may be chosen from C unlimited number of times.
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [2, 3, 6, 7] and target 7,
 * A solution set is:
 * [
 *  [7],
 *  [2, 2, 3]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

首先可以做的一点是，对数组进行filter，如果数组元素大于target，直接忽略




像这种结果要求返回所有符合要求解的题十有八九都是要利用到递归，而且解题的思路都大同小异，
相类似的题目有 Path Sum II，Subsets II，Permutations，Permutations II，Combinations 等等，
如果仔细研究这些题目发现都是一个套路，都是需要另写一个递归函数，
这里我们新加入三个变量，start记录当前的递归到的下标，out为一个解，res保存所有已经得到的解，
每次调用新的递归函数时，此时的target要减去当前数组的的数，如果该数小于0，说明这个组合不行。比如[3, 5], target = 4
第一次调用后，target变成1，接着从头开始，target - 3 = -2, 递归结束
如果target刚好为0，则说明找到了

class Solution {
public:
    vector<vector<int>> combinationSum(vector<int> &candidates, int target) {
        vector<vector<int>> res;
        sort(candidates.begin(), candidates.end());
        combinationSumDFS(candidates, target, 0, {}, res);
        return res;
    }
    void combinationSumDFS(vector<int> &candidates, int target, int start, vector<int> out, vector<vector<int>> &res) {
        if (target < 0) return;
        else if (target == 0) {res.push_back(out); return;}
        for (int i = start; i < candidates.size(); ++i) {
            out.push_back(candidates[i]);
            combinationSumDFS(candidates, target - candidates[i], i, out, res);
            out.pop_back();
        }
    }
};


我们也可以用迭代的解法来做，建立一个三维数组dp，
这里dp[i]表示目标数为i的所有解法集合。
这里的i就从1遍历到target即可，对于每个i，我们都新建一个二维数组cur，然后遍历candidates数组，
如果遍历到的数字大于i，说明当前及之后的数字都无法组成i，直接break掉。
否则如果相等，那么把当前数字自己组成一个数组，并且加到cur中。
否则就遍历dp[i - candidates[j] - 1] 中的所有数组，如果当前数字大于数组的首元素，则跳过，
因为我们的结果要求是要有序的。否则就将当前数字加入数组的开头，并且将数组放入cur之中即可，参见代码如下：
class Solution {
public:
    vector<vector<int>> combinationSum(vector<int> &candidates, int target) {
        vector<vector<vector<int>>> dp;
        sort(candidates.begin(), candidates.end());
        for (int i = 1; i <= target; ++i) {
            vector<vector<int>> cur;
            for (int j = 0; j < candidates.size(); ++j) {
                if (candidates[j] > i) break;
                else if (candidates[j] == i) {cur.push_back({candidates[j]}); continue;}
                for (auto a : dp[i - candidates[j] - 1]) {
                    if (candidates[j] > a[0]) continue;
                    a.insert(a.begin(), candidates[j]);
                    cur.push_back(a);
                }
            }
            dp.push_back(cur);
        }
        return dp[target - 1];
    }
};
