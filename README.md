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

如果互换两个数
最简单的当然是
```js
tmp = a;
a = b;
b = tmp;
```

如果要效率更高，或者说不借助额外的变量，那么
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
