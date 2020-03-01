1, for ListNode

```js
function ListNode(value) {
  this.value = value;
  this.next = null;
}

or

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//initialization
const left = new ListNode(0);

//for testing
const left = {
  value: 0,
  next: {
    value: 1,
    next: null
  }
}
```


2a, swap two numbers by bitwise operation

exchange two values by normal way
```js
tmp = a;
a = b;
b = tmp;
```

exchange without extra variable
注意，这个方法有两个限制条件
首先只适用于交换数字的情况
其次，i和j不能相等
```js
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

第二句
```js
b = a ^ b ^ b;
b ^ b is 0, a ^ 0 is a. (假如a是110110 ^ 0 = 110110， 因为1和0不同，不同所以为1，0和0相同，相同所以为0)
```
第三句
```js
a = a ^ b, 这里a = a ^ b, b = a
so
a = a ^ b ^ a === b
```

注意，如果这个方法用来交换数组的两个index，要注意两个index必须不同
```js
const swap = (nums, i, j) => {
	nums[i] = nums[i] ^ nums[j];
	nums[j] = nums[i] ^ nums[j];
	nums[i] = nums[i] ^ nums[j];
}
```
考虑nums=[2], i = 0, j = 0，经过这样的交换后nums变成了[0]
见075

2b, swap two numbers by destructing
```js
const swap = (a, b) => [b, a];
let a = 100, b = 200;
[b, a] = swap(a, b);
```


3, complexity
二分法一般都是o(logn)


4, 取中点
```js
let mid = Math.floor((left + right)/2);
这样可能导致溢出。
所以一般是
mid = left + Math.floor((right - left)/2);
```


5, 初始化二维数组，其每个元素都是一个数组
```js
const dp = [];
const n = 3;
while(dp.push(new Array(n).fill(0)) < n);

得到的结果是
[
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
]
而不是下面这个，因为下面是一维数组
[
	0, 0, 0,
	0, 0, 0,
	0, 0, 0
]
```


6, dfs
在dfs函数里，当条件满足时，如果是对数组进行操作，要对该数组进行拷贝操作
比如
```js
const dfs = (nums, array, result) => {
  if (nums.length === array.length) {
    result.push([...array]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (array.includes(nums[i])) {
        continue;
      }

      array.push(nums[i]);
      dfs(nums, array, result);
      array.pop();
    }
  }
};
```
具体结果可以在046里面查看

如果这个数组是二维数组，那么不能直接像上面一样进行拷贝，而需要对每个元素单独进行拷贝
```js
const getClone = arr => {
  const clone = [];
  for (let i = 0; i < arr.length; i++) {
    clone[i] = [...arr[i]];
  }
  return clone;
};
```


7, concat
concat can be applied to both array and string, and the original array/string would be intact
```js
const str = str1.concat(str2);
const arr = arr1.concat(arr2);
```


8, Math.min
it accepts more than 2 arguments, like
```js
Math.min(1, 2, 3) === 1

const array = [1, 2, 3];
Math.min(...array) === 1
```


9, -0
```js
0 === -0
1/0 === Infinity
1/-0 === -Infinity
```
check 073 for more details



10, get row number and column number of a matrix
```js
if(!matrix) {
	return 0;
}
const m = matrix.length;
if(m === 0) return 0;

const n = matrix[0].length;
if(n === 0) return 0;
```


11, access `i`th of string
```js
const s = 'welcome';
s[5]
or
s.charAt(5);
```


12, b-tree, binary tree, and binary search tree
b-tree may have multiple nodes.
binary tree is one kind of b-tree, but has only two nodes
BST is one kind of binary tree, it has below features:
- the left subtree of a node contains only nodes with less key
- the right subtree of a node contains only nodes with larger key
- the left and right subtree each must be a BST
- no duplicated nodes



13, binary search tree
空树也是一种二叉树


14, MIN and MAX
```js
1, bit operation
MIN = 1 << 31;
MAX = ~(1 << 31);

2, Number
Number.MIN_SAFE_INTEGER
Number.MAX_SAFE_INTEGER

```


15, BFS (breadth first search)
https://www.programiz.com/dsa/graph-bfs
```
create a queue Q 
mark v as visited and put v into Q 
while Q is non-empty 
    remove the head u of Q 
    mark and enqueue all (unvisited) neighbours of u
```


16, preorder, inorder, postorder
简单说，pre 或者in或者post都是对于root节点来说的。
pre就是先访问root，in是先左子树后root最后右zishu，post是先左子树后右zishu最后root
```
    3
   / \
  9  20
/  \
15  7
```

以上图为例，preorder是3, 9, 15, 7, 20
inorder是15, 9, 7, 3, 20
postorder 15, 7, 9, 20, 3


200, 中英文对照 
product (which means 积)
facebook interview question, leetcode 238
the interviewer stated that division is very expensive


even: 偶数
odd: 奇数

dividend: 被除数
divisor: 除数
quotient: 商
被除数 / 除数 = 商


