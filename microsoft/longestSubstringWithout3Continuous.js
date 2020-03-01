Given a string s containing only a and b, find longest substring of s such that s does not contain more than two contiguous occurrences of a and b.

Example 1:
Input: "aabbaaaaabb"
Output: "aabbaa"

Example 2:
Input: "aabbaabbaabbaa"
Output: "aabbaabbaabbaa"

从第1个字符开始，跟前一个比较。
如果i和i-1相同，则将count++
如果count大于2，则说明同一个字母连续出现了三次
这个时候应该从i-1开始计算
比如
aaabb
到index为2的时候，count为3，start从1开始计算，也就是i-1

如果i和i-1不相同，说明换了一个字母了。此时将count重置为1

保留一个maxLen, 当start到i的长度超过maxLen, 说明此时的长度最长

const getString = (s) => {
  const { length } = s;
  if (length < 3) {
    return s;
  }
  
  let start = 0;
  let maxLen = -1;
  let result = '';
  let count = 1;
  
  for(let i = 1; i < length; i++) {
    if (s[i] === s[i-1]) {
      ++count;
      if (count > 2) {
        start = i - 1;
        count = 1;
      }
    } else {
      count = 1;
    }
    
    if (i - start + 1 > maxLen) {
      maxLen = i - start + 1;
      result = s.slice(start, i + 1);
    }
  }
  
  return result;
}
