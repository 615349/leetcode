Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

这种题目一般都可以dfs解决
但这题的dfs的条件跟以前的有点不同。之前的都是数组里面的元素达到一定数量就push
但这题没有特殊的条件，所以要把每个都push到result数组

dfs递归的条件是每次把start index的值递增

const dfs = (nums, array, result, index, n) => {
    result.push([...array]);
    
    for(let i = index; i < n; i++) {
        array.push(nums[i]);
        dfs(nums, array, result, i+1, n);
        array.pop()
    }
}

var subsets = function(nums) {
    const result = [];
    if(!nums || nums.length === 0) {
        return result.push([]);
    }

    nums.sort((a, b) => a - b);

    const array = [];
    const index = 0;
    const n = nums.length;
    dfs(nums, array, result, index, n);

    return result;
};
