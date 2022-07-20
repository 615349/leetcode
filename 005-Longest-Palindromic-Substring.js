/**
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 * Difficulty:Medium
 *
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example:
 * Input: "cbbd"
 * Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */

我们维护一个二维数组dp，其中dp[i][j]表示字符串区间[i, j]是否为回文串
有且仅有三种情况
i=j，那么只有一个字符，dp[i][j] = 1
i + 1 = j，dp[i][j] = s[i] === s[j]
j - i > 1, dp[i][j]的值取决于dp[i+1][j-1] && s[i] === s[j]

const longestPalindrome = (s) => {
  const n = s.length;
  
  const dp = [];
  while(dp.push(new Array(n).fill(false)) < n);
  
  let maxLen = 0;
  let result = '';
  
  for(let j = 0; j < n; j++) {
    for(let i = 0; i <= j; i++) {
      const distanceBetweenIAndJ = j - i + 1;
      switch(distanceBetweenIAndJ) {
        case 1:
          // i 和 j 相等
          dp[i][j] = true;
          break;
          
        case 2:
              // i 和 j 紧挨着
          dp[i][j] = s[i] === s[j];
          break;
          
        default:
              // 其他情况，i 和 j 不紧挨着
          dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
          break;
      }
      
      if (dp[i][j] && maxLen < distanceBetweenIAndJ) {
        maxLen = distanceBetweenIAndJ;
        result = s.slice(i, j+1);
      }
    }
  }
  
  return result;
}
