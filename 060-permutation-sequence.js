The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.

Example:
Input: n = 3, k = 3
Output: "213"

跟46，51，52一样，使用dfs
const dfs = (nums, result, current, n) => {
  if (n === current.length) {
    result.push(current.join(""));
  } else {
    for (let i = 0; i < n; i++) {
      if (current.includes(nums[i])) continue;

      current.push(nums[i]);
      dfs(nums, result, current, n);
      current.pop();
    }
  }
};

var getPermutation = function(n, k) {
  const result = [];
  const current = [];
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }

  dfs(nums, result, current, n);
  return result[k - 1];
};

但是这个结果不能通过leetcode的检查

所以只能用其他的方法

这里首先需要解决一个问题，对于n而言，会有多少种可能的permutation
index 0的有n个可能性
index 1的有n-1个可能性
...
index n-1的有1一个可能性
所以总共有n*(n-1)*...1 which is n!

先通过举例来获得更好的理解。以n = 4，k = 9为例：

1234
1243
1324
1342
1423
1432
2134
2143
2314  <= k = 9
2341
2413
2431
3124
3142
3214
3241
3412
3421
4123
4132
4213
4231
4312
4321

最高位可以取1, 2, 3, 4，而每个数会重复3! = 6次（就是每6个数最高位会改变）
而k为9-1=8
divided = 8/6=1
所以result[0]为[1, 2, 3, 4]中的index为1的数，即2
并且将k赋值为k = k%6 = 2

而对于以2开头的6个数字而言，其重复周期是2! = 2
k已经是2了
divided = k / (2!) = 1
而剩下的数字[1, 3, 4]
所以result[1]为[1, 3, 4]中index为1的数，即result[1] = 3
k = k % 2 = 0;

对于以23开头的2个数字而言，其重复周期是1
divided = k/1 = 0
所以result[2]是剩下数字[1,4]中index为0的数，所以result[2]=1

对于以231开头的一个数字而言result[3] = 4

const getPermutation = (n, k) => {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }

  let mod = 1;
  for (let i = 1; i <= n; i++) {
    mod = mod * i;
  }

  const result = [];

  --k;
  for (let j = 0; j < n; j++) {
    mod = mod / (n - j);
    const divided = Math.floor(k / mod);
    k = k % mod;
    result.push(nums[divided]);
    nums.splice(divided, 1);
  }
  return result.join("");
};

