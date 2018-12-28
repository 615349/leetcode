/**
 * https://leetcode.com/problems/permutations/description/
 * Difficulty:Medium
 *
 * Given a collection of distinct numbers, return all possible permutations.
 * For example,
 * [1,2,3] have the following permutations:
 * [
 *  [1,2,3],
 *  [1,3,2],
 *  [2,1,3],
 *  [2,3,1],
 *  [3,1,2],
 *  [3,2,1]
 * ]
 */

这种列举所有的一定是dfs，根据leetcode结果来看，比94%的用户要快


注意注意！！！！

在dfs里面当条件满足的时候，不能直接push，而是要把temp数组进行拷贝
否则temp数组在之后发生改变的时候，result数组中的结果也会改变
不是很清楚为什么

const dfs = (nums, array, result) => {
  if (nums.length === array.length) {
    result.push([...array]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      // prevent [1, 1, 1] or [1, 1, 2] etc
      if (array.includes(nums[i])) {
        continue;
      }

      array.push(nums[i]);
      dfs(nums, array, result);
      array.pop();
    }
  }
};

var permute = function(nums) {
  const result = [];
  if (!nums || nums.length === 0) {
    return result.push([]);
  }

  const array = [];

  dfs(nums, array, result);

  return result;
};

