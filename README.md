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
