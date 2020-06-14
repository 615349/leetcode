Give you one sorted array, please put them into n buckets, we need to ensure we get n sub array with approximately equal weights.
Example;
input {1, 2, 3, 4, 5} n = 3
output [[[5],[1,4],[2,3]];

肯定是dfs了
深度优先的时候要考虑，不能修改除了result数组之外的东西，尤其是subset
所以不能subset.push()，即使之后进行subset.pop()也不对，应该可能push多次了再pop
所以对subset进行了concat操作

const dfs = (A, result, subset, index, sum, target) => {
  if (sum === target) {
    return result.push(subset);
  } else if (sum > target) {
    return;
  }
  
  for(let i = index; i < A.length; i++) {
    dfs(A, result, subset.concat([A[i]]), i + 1, sum + A[i], target);
  }
}

const solution = (A, n) => {
  let sum = 0;
  for(let i of A) {
    sum += i;
  }
  
  const target = Math.floor(sum/n);
  
  const result = [];
  dfs(A, result, [], 0, 0, target);
  return result;
}
