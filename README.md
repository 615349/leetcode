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

