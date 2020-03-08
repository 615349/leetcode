Write a function, given a string S consisting of N characters, returns the maximum number of letters 'a' that can be inserted into S (including at the front and end of S) so that the resulting string does not contain three consecutive letters 'a'. if the string S already contains the substring of 'aaa', return -1

Example
1, Given S = 'aabab', function should return 3 => 'aabaabaa'

2, Given S = 'dog', the function should return 8 => 'aadaaoaagaa'

3, Given S = 'aa', return 0

4, Given S = 'baaaa', return -1

N is an integer within the range [1..200,000]
S consists only of lowercase letters (a-z)

第一步，看是否有aaa的存在。如果存在直接返回

接着分两种情况，
第一, s[i] !== a
则在其之前插入a，至于插入几个a，取决于i之前a的个数
比如
aab，当循环到b的时候，之前已经有两个a了，所以不插入
如果是ab，当循环到b的时候，插入一个a
如果是b，则插入2个a

所以需要一个count来计算i之前a的个数

第二，s[i] === a
因为不可能有aaa的存在，所以是否插入要看下一个是否是a
所以需要跟s[i+1]比较。如果下一个是a，这里就不插入了
如果不是a，可以插入1个，并且++count

最后因为在循环中使用了i+1，需要把最后一个字母单独计算
如果是a，并且之前没有a，则result ++
如果不是a，首先在最后一个字母之前加上2-count，然后在最后一个字母之后加上2

const getString = (str) => {
  const { length } = str;
  if (str.includes('aaa')) {
    return -1;
  }
  
  let result = 0;
  let count = 0;
  
  for(let i = 0; i < length - 1; i++) {
    if (str[i] === 'a') {
      ++count;
      if (count === 1) {
        if (str[i+1] === 'a') {
          continue;
        } else {
          ++count;
          result += 1;
        }
      }
    } else {
      result += 2 - count;
      count = 0;
    }
  }
  
  const lastChar = str[length - 1];
  if (lastChar === 'a') {
    ++count;
    if (count < 2) {
      ++result;
    }
  } else {
    result += 2 - count;
    result += 2;
  }
  
  
  return result;
}
