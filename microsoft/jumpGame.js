Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.

 

Example 1:

Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 
Example 2:

Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3
Example 3:

Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.

首先思考什么情况下会返回false？看第三个例子就知道了，就是重复访问某个点
其次，可以往左走也可以往右走。只要有一个路走通就可以， 所以答案一定是left || right
最后，如果往左走小于0，或者往右走大于数组长度，就说明越界了，这个情况应该标记为false

综合考虑这两点，使用dfs，并设立一个visited数组，每次访问后标记为true

const dfs = (A, index, visited) => {
  if (A[index] === 0) {
    return true;
  }
  
  visited[index] = true;
  
  let left = false, right = false;
  const nextLeftIndex = index - A[index];
  if (nextLeftIndex >= 0 && !visited[nextLeftIndex]) {
    left = dfs(A, nextLeftIndex, visited);
  }
  const nextRightIndex = index + A[index];
  if (nextRightIndex < A.length && !visited[nextRightIndex]) {
    right = dfs(A, nextRightIndex, visited);
  }
  
  return left || right;
}

const canReach = function(arr, start) {
  const visited = new Array(arr.length).fill(false);
  return dfs(arr, start, visited)
};
