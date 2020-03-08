Alexa is given n piles of equal or unequal heights. In one step, Alexa can remove any number of boxes from the pile which has the maximum height and try to make it equal to the one which is just lower than the maximum height of the stack. Determine the minimum number of steps required to make all of the piles equal in height.

Example 1:

Input: piles = [5, 2, 1]
Output: 3
Explanation:
Step 1: reducing 5 -> 2 [2, 2, 1]
Step 2: reducing 2 -> 1 [2, 1, 1]
Step 3: reducing 2 -> 1 [1, 1, 1]
So final number of steps required is 3.

考虑这样的情况
1，2，3，或者1，2，4
这两个情况得到的结果是一样的
对于1，2，3
2需要移动1次，3需要移动2次
如果是1，2，3，4
则2需要1次，3需要2次，4需要3次
所以如果是1，2，..., N
所需要的次数分别是0，1，2，..., N-1
结果就是R1 = 0 + 1 + ... + N - 1

但是如果有重复的数字，结果肯定不用那么多次
所以结果是R = R1 - R2
R2就是修改重复数字，使得所有数字都一样所需要的次数

考虑全部数字是都1
1，1，1
要变成
1，2，3
需要0 + 1 + 2次数
如果是有n个1，则变成1，2，..., n，次数是0 + 1 + ... + n-1


const getSum = (m) => {
  let result = 0;
  for(let i = 1; i < m; i++) {
    result += i;
  }
  return result;
}

const minSteps = (piles = []) => {
  const n = piles.length;
  const map = new Map();
  let duplicated = 1;
  for(let i = 0; i < n; i++) {
    const num = piles[i];
    if (map.has(num)) {
      ++duplicated;
    } else {
      map.set(num, true);
    }
  }
  
  return getSum(n) - getSum(duplicated);
}

