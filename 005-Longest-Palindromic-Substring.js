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

必须使用DP解决问题，其他的没意思
我们维护一个二维数组dp，其中dp[i][j]表示字符串区间[i, j]是否为回文串
有且仅有三种情况
i=j，那么只有一个字符，dp[i][j] = 1
i + 1 = j，dp[i][j] = s[i] === s[j]
j - i > 1, dp[i][j]的值取决于dp[i+1][j-1] && s[i] === s[j]

var longestPalindrome = function(s) {
    if (s === '' || s.length === 0) {
        return ''
    }
    
    const n = s.length;
    
    let dp = [];
    while(dp.push(new Array(n).fill(0)) < n);
    
    let i, j, maxLen = 0;
    let result = '';
    
    for(i = 0; i < n; i++) {
        for(j = 0; j <= i; j++) {
            if (i === j) dp[i][j] = 1;
            if ((i - j) === 1) dp[i][j] = s[i] === s[j];
            if(i - j > 1) dp[i][j] = dp[i-1][j+1] && s[i] === s[j];
            let distanceBetweenIandJ = i - j + 1;
            if(dp[i][j] && maxLen < distanceBetweenIandJ) {
                maxLen = distanceBetweenIandJ;
                result = s.substring(j, i + 1)
            }
        }
    }
    return result;
};
