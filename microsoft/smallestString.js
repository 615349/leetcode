Lexicographically smallest string formed by removing at most one character.

Example 1:

Input: "abczd"
Output: "abcd"

移除一个字母，使得从ascii码上看最小

算法很简单，左到右，遇到第一个左边大于右边的。
如果所有的左边都小于右边，删除最后一个字母

const removeChar = (S) => {
  let s = S;
  for (let i = 0; i < s.length - 1; i++) {
    const current = s.charAt(i);
    const next = s.charAt(i + 1);
    if (current > next) {
      s = S.slice(0, i) + S.slice(i+1);
      break;
    }
  }
  if (s.length === S.length) {
    return s.slice(0, s.length - 1)
  }
  return s;
}

