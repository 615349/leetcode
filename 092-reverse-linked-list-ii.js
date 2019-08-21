Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

思路其实很简单
先移动到m-1，然后将m和n之间的reverse
关于链表的reverse，可以看
https://www.cnblogs.com/byrhuangqiang/p/4311336.html

pre是m-1点，start是反转之前的第一个点，end是当前要反转的点
反转后的顺序应该是
pre -> end -> ... -> start -> ...

有一个注意点是，需要建立一个dummy node，这个dummy node指向head，返回的时候返回dummy.next就可以了，不能用pre，因为prev.next已经改变了


var reverseBetween = function(head, m, n) {
    if (!head || head.next === null || m === n) {
        return head;
    }
    
    const _m = m-1;
    const _n = n-1;
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    
    let count = 0;
    while(count < _m) {
        pre = pre.next;
        count++;
    }
    
    let start = pre.next;
    if (!start) {
        return head;
    }
    
    let end = start.next;
    while(end && count < _n) {
        start.next = end.next;
        end.next = pre.next;
        pre.next = end;
        end = start.next;
        count++;
    }
    
    return dummy.next;
};
