/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Difficulty:Medium
 *
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

分析：用两个指针ij从头开始遍历字符串。ij分别表示最长字串的首尾下标。
如果第j个与i与j当中的某处k重复，那么只需i从k+1开始继续判断是否有重复的就好。
当然，在i++一直到k的过程中，不要忘记把已经收录的字符存在标记为不存在。
所以用一个book数组标记该字符在i~j当中是否出现过。每一次找到重复的字符的时候判断j-i是否比最大值大。
一个特例是，如果i~j中一直让j到了最后一个字符都没有重复但是此时的j-i是最长的长度，所以要在return语句前再加上一句判断j-i的大小是否比当前maxlen大。
因为i和j都只遍历了字符串一次，所以时间复杂度为O(n)。



const getLongestLength = (s) => {
  let i = 0, j = 0, maxLen = 0;
  let map = {};
  while (j < s.length) {
    if (map[s[j]] === undefined) {
      map[s[j]] = 1;
      maxLen = Math.max(j - i + 1, maxLen);
      j++;
    } else {
      // j和i到j之间的k重合，那么删除i，并且往前移动，一直移动到k，删除k，然后i再往前一步
      delete map[s[i]];
      i++;
    }
  }
  return maxLen;
};

13/10/2020 更新
使用dp
这样考虑。dp[i]表示字符串从某个位置开始到i为止，最大的sub string
s:   a    b    c    a    b   c    b    b
dp:  a    ab  abc   bca  cab abc  cb   b

也就是说，计算dp[i]的时候，如果dp[i-1]不包含s[i]，那么dp[i] = dp[i-1] + s[i]
如果dp[i-1]包含s[i]，那么在dp[i-1]找到s[i]的位置，然后取其slice(index + 1)，再加上s[i]
举个例子，dp[i-1] = 'abcd'， s[i] = 'b'，那么dp[i] 应该是'cdb'，其计算过程应该是
index = dp[i-1].indexOf(s[i])
dp[i] = dp[i-1].slice(index + 1) + s[i]

var lengthOfLongestSubstring = function(s) {
    const { length } = s;
    
    if (length <= 1) {
        return s.length;
    }
    
    const dp = new Array(length).fill('')
    
    dp[0] = s.charAt(0);
    let max = 1;
    
    for(let i = 1; i < length; i++) {
        const index = dp[i-1].indexOf(s[i])
        if (index === -1) {
            dp[i] = dp[i-1] + s[i];
        } else {
            dp[i] = dp[i-1].slice(index + 1) + s[i]
        }
        
        max = Math.max(max, dp[i].length);
    }
        
    return max;
};

