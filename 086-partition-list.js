Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5

解法其实很简答，设立两个新的list，分别为p1和p2
循环原list，如果值小于x，那么就放入p1，否则放入p2

到最后把两个list连接起来就可以了

注意，记得p2.next要设置为null，因为如果原链表的最后的一个元素小于x的话，p2还是指向之前的一个元素，这样会形成环状

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) {
        return null;
    }
    
    let node1 = new ListNode(0);
    let node2 = new ListNode(0);
    
    let p1 = node1;
    let p2 = node2;
    
    while(head) {
        if (head.val < x) {
            p1.next = head;
            p1 = head;
        } else {
            p2.next = head;
            p2 = head;
        }
        head = head.next;
    }
    
    p2.next = null;
    node2 = node2.next;
    p1.next = node2;
    return node1.next;
};
