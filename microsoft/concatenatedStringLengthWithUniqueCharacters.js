Given an Array A consisting of N Strings, calculate the length of the longest string S such that:

S is a concatenation of some of the Strings from A.
every letter in S is different.
Example -
A = ["co","dil","ity"] , function should return 5, resulting string S could be codil , dilco, coity,ityco
A = ["abc","kkk","def","csv"] , returns 6 , resulting Strings S could be abcdef , defabc, defcsv , csvdef
A = ["abc","ade","akl"] , return 0 , impossible to concatenate as letters wont be unique.

N is [1..8] ; A consists of lowercase English letters ; sum of length of strings in A does not exceed 100.

深度优先
首先创建一个helper函数，对于输入的字符串进行判断是否有重复的
最好的方法是使用set的方法
第二，建立一个dfs函数。由于是对数组进行遍历，设置一个index，每次从这个index开始到结束
这里加了第四个参数，判断这个string是否由至少两个项组成，因为题目里的第三个例子，如果是单独项，就返回0


let counter = 0;

const isUnique = (current) => {
  const set = new Set(Array.from(current));
  return set.size === current.length;
}

const dfs = (array, index, current, multipleWords) => {
  if (!isUnique(current)) {
    return;
  }
  
  //如果current是数组里的单一项组成，则不计算
  if (multipleWords) {
    counter = Math.max(counter, current.length);
  }
  
  for(let i = index; i < array.length; i++) {
    // 对数组里的每一项都进行计算
    const _current = current + array[i];
    if (!isUnique(_current)) {
      continue;
    }
    const _hasMultipleWords = current.length > 0 && _current.length > current.length;
    // 当前的计算后从下一项开始计算，所以i+1
    dfs(array, i + 1, _current, _hasMultipleWords);
  }
}

const maxLength = (array) => {
  dfs(array, 0, '', false);
  return counter;
}
