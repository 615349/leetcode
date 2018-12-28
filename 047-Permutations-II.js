/**
 * https://leetcode.com/problems/permutations-ii/description/
 * Difficulty:Medium
 *
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 * For example,
 * [1,1,2] have the following unique permutations:
 *  [
 *  [1,1,2],
 *  [1,2,1],
 *  [2,1,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

跟046相比有两个难题
1，不能再使用array.includes(nums[i])的方式来保证每个元素只会被压入数组一次
解决方法是不再直接push数组元素，而是push一个obj，该obj包含数组元素的index
2，在dfs函数里，当条件满足时不能直接push到result数组，
而是必须判断该数组是否在result数组里了
解法方式是使用一个map，把每次要push的数组string化，比如
map = {
  '112': true,
  '121': true
}

那么当数组已经在map里，就不push

const dfs = (nums, array, map, result, n) => {
    if (n === array.length) {
       // 之前push的obj，所以需要提取出所需要的数组出来
        const list = [];
        for(let k = 0; k < n; k++) {
            list.push(array[k].val)
        }
        const str = list.join('');
        if(map[str]) return;
        map[str] = true;
        result.push([...list]);
    } else {
        for(let i = 0; i < n; i++) {
            const obj = {
                id: i,
                val: nums[i]
            }
            let isIncluded = false;
            for(let j = 0; j < array.length; j++) {
                if (array[j].id === i) {
                    isIncluded = true;
                }
            }
            if (isIncluded) continue;
            array.push(obj);
            dfs(nums, array, map, result, n);
            array.pop()
        }
    }
}

var permuteUnique = function(nums) {
    const result = [];
    //使用n仅仅为了节省计算
    const n = nums.length;
    if (!nums || n === 0) {
        return result.push([]);
    }
    
    const array = [];
    const map = {};
    
    dfs(nums, array, map, result, n);
    
    return result;
};


