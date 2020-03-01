Given a string, what is the minimum number of adjacent swaps required to convert a string into a palindrome. If not possible, return -1.
Example 1:
Input: "mamad"
Output: 3
Example 2:
Input: "asflkj"
Output: -1
Example 3:
Input: "aabb"
Output: 2
Example 4:
Input: "ntiin"
Output: 1
Explanation: swap 't' with 'i' => "nitin"

首先定义一个map，因为要判断是否是回文，所以如果一个字母已经出现过了，则删除这个key
所以如果最终map里留下的key大于等于2，则说明这个字符串不可能是回文

如果map里剩下一个key，则说明回文的型式是mamad。所以把出现一次的字母d移动到正中央

如果map是空的，则说明回文形式是aabb型
则从第一个字母开始遍历，一直到一半的地方。如果s[i] = s[j], 则把j移动到i对称的位置，i + j == length - 1

const swap = (s, i, j) => {
  const temp = s[i];
  s[i] = s[j];
  s[j] = temp;
};

const minSwap = s => {
  const array = s.split('');
  const { length } = array;
  const halfLength = Math.floor(length / 2);
  
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.delete(s[i]);
    } else {
      map.set(s[i], true);
    }
  }
  
  if (map.size >= 2) {
    return -1;
  }

  let result = 0;

  if (map.size === 1) {
    let middleStr = "";
    for (let key of map.keys()) {
      middleStr = key;
    }
    let index = s.indexOf(middleStr);
    if (index < halfLength) {
      while (index < halfLength) {
        swap(array, index, index + 1);
        ++result;
        ++index;
      }
    } else if (index > halfLength) {
      while (index > halfLength) {
        swap(array, index, index - 1);
        ++result;
        --index;
      }
    }
  }

  for (let i = 0; i < halfLength; i++) {
    let j = length - 1 - i;
    while (i < j && array[i] !== array[j]) {
      j--;
    }

    while (j < length - 1 - i) {
      swap(array, j, j + 1);
      ++j;
      ++result;
    }
  }

  return result;
};
