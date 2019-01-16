Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

思路跟之前的题很类似，就是dfs
对于1到n的循环中有一个要注意，就是每个push的元素都必须比之前的大才行，相等也不要

const isMaximal = (array, value) => {
    for(let i = 0; i < array.length; i++) {
        if (value <= array[i]) {
            return false;
        }
    }
    
    return true;
}

const dfs = (result, array, n, k) => {
    if (array.length === k) {
        result.push([...array]);
    } else {
        for(let i = 1; i <= n; i++) {            
            if (!isMaximal(array, i)) continue;
            
            array.push(i);
            dfs(result, array, n, k);
            array.pop();
        }
    }
}


var combine = function(n, k) {
    const result = [];
    
    
    if(n <= 0 || k > n) {
        return result;
    }
    
    const array = [];
    
    dfs(result, array, n, k)
    return result;
};
