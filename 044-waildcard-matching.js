Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.i

Example 1:
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:
Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

Example 4:
Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

Example 5:
Input:
s = "acdcb"
p = "a*c?b"
Output: false

本题要求p替换?和*之后，s和p相等

实际上就是考字符串之间的比较。当比较s[i]与p[j]的匹配时，可以通过s[i - 1]和p[j - 1]再加上比较当前两个字符就可以，所以用dp解决

dp[i][j]表示s[0...i]和p[0...j]之间的匹配情况

当p[j] 为？时
那么dp[i][j] = dp[i-1][j-1]，也就是最后一个字符肯定已经匹配了

当p[j]为*时
如果*表示0个字符，那么
dp[i][j] = dp[i][j-1]
如果*表示1个字符，那么
dp[i][j] = dp[i-1][j-1]
如果*表示2个字符，那么
dp[i][j] = dp[i-2][j-1]
当*表示n个字符时
dp[i][j] = dp[0][j-1]

so, dp[i][j] = dp[0][j-1] || dp[1][j-1] || ... || dp[i-1][j-1] || dp[i][j-1]
可以简化一下，
考虑dp[i-1][j] = dp[0][j-1] || dp[1][j-1] || ... || dp[i-1][j]

所以dp[i][j]除了最后一项，其他的就是dp[i-1][j]
所以dp[i][j] = dp[i-1][j] || dp[i][j-1]

当p[j]是普通字符,
dp[i][j] = dp[i-1][j-1] && s[i] === p[j]

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s === null || p === null) return false;

  const dp = [];
  const len1 = s.length;
  const len2 = p.length;
  //最终返回值是dp[len1][len2], 所以要多分配一个空间
  while (dp.push(new Array(len2 + 1).fill(false)) < len1 + 1);

  let i, j;

  // 两者都是''，结果显然是true
  dp[0][0] = true;

  //如果p为空，结果显然是false
  for (i = 1; i <= len1; i++) {
    dp[i][0] = false;
  }

  //如果s为空，如果p是*，那么也是true，所以要根据上一个考虑
  for (j = 1; j <= len2; j++) {
    dp[0][j] = dp[0][j - 1] && p[j - 1] === "*";
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      //为何是p[j - 1]? 只需要考虑p = '*'，所以应该是p[0]而不是p[1]
      switch (p[j - 1]) {
        case "?":
          dp[i][j] = dp[i - 1][j - 1];
          break;

        case "*":
          dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
          break;

        default:
          dp[i][j] = dp[i - 1][j - 1] && p[j-1] === s[i-1];
          break;
      }
    }
  }
  return dp[len1][len2];
};
