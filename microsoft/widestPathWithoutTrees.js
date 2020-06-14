https://leetcode.com/discuss/interview-question/447448/

There are N trees (numbered from 0 to N-1) in a forest.
The Kth tree is located at coordinates(X[k], Y[k]).

We want to build the widest possible vertical path, such that there is no tree on it.
The path must be built somewhere between a leftmosft and a rightmost tree

因为是垂直的路径，只需要看x轴就可以。
要求最宽的路径上没有数，也就是说x轴上的差距最大的相邻的两个数。所以需要先排序一次

const solution = (X, Y) => {
  X.sort((a, b) => a - b);
  
  let max = -1;
  for(let i = 0; i < X.length - 1; i++) {
    max = Math.max(max, X[i+1] - X[i]);
  }
  
  return max;
}
