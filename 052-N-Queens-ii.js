这个题目的要求跟051唯一的区别是，051要求返回二维数组本身，而这题只要返回二维数组的长度，比051还更简单一些。具体就不说了

const Q = "Q";
const DOT = ".";

const getClone = arr => {
  const clone = [];
  for (let i = 0; i < arr.length; i++) {
    clone.push(arr[i].join(''))
  }
  return clone;
};

const dfs = (result, current, i, n, column, cross1, cross2) => {
  if (i === n) {
    result.push(getClone(current));
  } else {
    for (let j = 0; j < n; j++) {
      if (column[j]) continue;
      if (cross1[i + j]) continue;
      if (cross2[n - 1 + i - j]) continue;

      column[j] = true;
      cross1[i + j] = true;
      cross2[n - 1 + i - j] = true;
      current[i][j] = Q;
      dfs(result, current, i + 1, n, column, cross1, cross2);
      column[j] = false;
      cross1[i + j] = false;
      cross2[n - 1 + i - j] = false;
      current[i][j] = DOT;
    }
  }
};

var totalNQueens = function(n) {
  const result = [];

  const current = [];
  while (current.push(new Array(n).fill(DOT)) < n);
  const column = new Array(n).fill(false);
  const cross1 = new Array(2 * n - 1).fill(false);
  const cross2 = new Array(2 * n - 1).fill(false);

  dfs(result, current, 0, n, column, cross1, cross2);

  return result.length;
};
