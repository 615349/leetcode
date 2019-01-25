Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

跟078类似，本题有duplicates
本来一开始的想法是dfs，然后看这个结果是否在map里面，也就是用数组作为map的key，结果发现是不可以的
也就是说map的key可以是NaN, function，object and primitive，但是不能是数组

那也简单，在map里存储array.join('')

虽然题目没有明确说，但是结果必须是升序的，所以要做一个排序

const dfs = (nums, result, current, start, map) => {
    if (map.has(current.join(''))) {
        return;
    }
    
    map.set(current.join(''), true);
    result.push([...current]);
    
    for(let i = start; i < nums.length; i++) {
        current.push(nums[i]);
        dfs(nums, result, current, i+1, map);
        current.pop()
    };
}

function subsetsWithDup(nums) {
    const result = [];
    const current = [];
    
    nums.sort((a, b) => a - b)
    
    const map = new Map();
    
    dfs(nums, result, current, 0, map);
    
    return result;
}
