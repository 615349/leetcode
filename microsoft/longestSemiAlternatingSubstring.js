Given a string S of length N containing only characters 'a' and 'b'.
A substring (contiguous fragment) of S is called a semi-alternating substring if it does not contain three identical consecutive characters.
In other words, it does not contain either 'aaa' or 'bbb' substrings

Write a function, which, given a string S, returns the length of the longest semi-alternating substring os S

Examples:
1, Given S = 'baaabbabbb', your function should return 7, which is the length of 'aabbabb'

2, Given S = 'babba', you function should return 5, since whole S is the semi-alternating

3, Given S = 'abaaaa', your function should return 4, which is the length of 'abaa'

本题不能应用dfs，以第一个例子来说，baaa的时候，就应该停止了
下面例子应该用dfs，因为可以第一个item和第三个item结合
https://github.com/615349/leetcode/blob/master/microsoft/concatenatedStringLengthWithUniqueCharacters.js

const getSubstringLength = (S) => {
  const { length } = S;
  
  let maxLen = -1;
  let start = 0;
  let count = 1;
  
  
  for (let i = 1; i < length; i++) {
    if (S[i] === S[i-1]) {
      ++count;

      if (count > 2) {
        start = i - 1;
        count = 1;
      } else {
        maxLen = Math.max(maxLen, i - start + 1);
      }
    } else {
      count = 1;
      maxLen = Math.max(maxLen, i - start + 1);
    }
  }
  return maxLen;
}




