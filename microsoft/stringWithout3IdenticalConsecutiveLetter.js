write a function, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible numberof letters

Examples:
1, Given S = 'eedaaad', the function should return 'eedaad'. One occurrence of letter a is deleted

2, Given S = 'xxxtxxx', the function should return 'xxtxx'. Note letter x can occure more than three times in the returned string, if the occurrences are not consecutive

3, Given S = 'uuuuxaaaaxuuu', the function should return 'uuxaaxuu'

先把字符串转换为数组
对数组遍历，对每个元素都和前一个元素比。
如果相同，则counter++
如果counter大于2，则要将其从数组删除
从数组删除的方法使用了.splice(index, 1, ''), 这样数组长度是保持不变的
如果不同，则将counter重置为1

const getString = (S) => {
  if (S.length < 3) {
    return S;
  }
  const array = S.split('');
  let counter = 1;
  for (let i = 1; i < array.length; i++) {
    if (S[i] === S[i-1]) {
      counter++;
      if (counter > 2) {
        array.splice(i, 1, '');
        --counter;
      }
    } else {
      counter = 1;
    }
  }
  return array.join('');
}
