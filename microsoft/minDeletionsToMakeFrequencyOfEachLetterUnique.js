Given a string s consisting of n lowercase letters, you have to delete the minimum number of characters from s so that every letter in s appears a unique number of times. We only care about the occurrences of letters that appear at least once in result.

Example 1:
Input: "eeeeffff"
Output: 1
Explanation:
We can delete one occurence of 'e' or one occurence of 'f'. Then one letter will occur four times and the other three times.

Example 2:
Input: "aabbffddeaee"
Output: 6
Explanation:
For example, we can delete all occurences of 'e' and 'f' and one occurence of 'd' to obtain the word "aabbda".
Note that both 'e' and 'f' will occur zero times in the new word, but that's fine, since we only care about the letter that appear at least once.

Example 3:
Input: "llll"
Output: 0
Explanation:
There is no need to delete any character.

Example 4:
Input: "example"
Output: 4

首先建立一个map，把char和次数放在map里
然后对map进行遍历，其次数>0的值全部放入一个数组中
然后对数组进行排序

接着遍历数组。对每个数字都判断其indexOf and lastIndexOf are the same
if not, which means there are more than 1
由第二个例子知道，对于值是0的直接忽略。最好不好对数组进行filter出大于0的，因为很容易导致数组长度发生变化导致一些意想不到的错误

const minDeletions = (s) => {
  const { length } = s;
  const map = new Map();
  
  
  for(let i = 0; i < length; i++) {
    let value = map.get(s[i]) || 0
    map.set(s[i], 1 + value);
  }
  
  let counters = [];
  for(let value of map.values()) {
    if (value === 0) {
      continue;
    }
    counters.push(value);
  }
  counters.sort();
    
  let deletions = 0;
  for(let i = 0; i < counters.length - 1; i++) {
    if (counters[i] === counters[i+1]) {
      while (counters.indexOf(counters[i]) !== counters.lastIndexOf(counters[i]) && counters[i] > 0) {
        --counters[i];
        ++deletions;
      }
    }
  }
  return deletions;
}
