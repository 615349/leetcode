Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

思路：
首先设计一个map
对于上面的输入，其结构是这样的：
map = {
	'aet': ['ate', 'eat', 'tea'],
	'ant': ['nat', 'tan'],
	'abt': ['bat']
}
对于数组中的每个元素，进行排序，然后看map是否存在该元素
如果存在，说明该元素的变形已经在map中，执行push到map相应key的值


const groupAnagrams = array => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    let tmp = Array.from(array[i]);
    tmp.sort();
    let str = tmp.join('');
    let value = [];
    if (map.has(str)) {
      value = map.get(str);
    }
    //不管该key是否在map中，都需要进行push和set操作
    value.push(array[i]);
    map.set(str, value);
  }

  let result = [];
  for (let [key, value] of map) {
    result.push(value);
  }

  return result;
};
