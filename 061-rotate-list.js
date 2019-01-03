Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL


Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL


此题实际上很简单。
其核心思想是把tail的next指向head，形成闭环
步骤是：
1，遍历一遍list，计算出长度，同时让tail.next指向head
2，找到新的tail应该是length - k%length

这里如果k很大，超过了length，也就是rotate超过一遍，那就需要mod


var rotateRight = function(head, k) {
    if(!head || k === 0) {
        return head;
    }
    
    let length = 1;
    
    let current = head;
    while(current.next !== null) {
        ++length;
        current = current.next;
    }
        
    current.next = head;
    k = k % length;
    let n = length - k;
    current = head;
    for(let i = 1; i < n; i++) {
        current = current.next;
    }
    head = current.next;
    current.next = null;
    return head;
};
