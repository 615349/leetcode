Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

要删除出现过重复的数字
所以需要用一个变量来保存这个重复的数字，然后把cur删除
另外由于可能会出现很多的重复数字，所以在循环里还要设置循环

var deleteDuplicates = function(head) {
    if(!head || head.next === null) {
        return head;
    }
    
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    let cur = head;
    
    while(cur) {
        if (cur.next && cur.val === cur.next.val) {
            let value = cur.val;
            while(cur && cur.val === value) {
               pre.next = cur.next;
               cur = pre.next;
            }
        } else {
            pre = cur;
            cur = cur.next;
        }
    }
    
    return dummy.next
};
