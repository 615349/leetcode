/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 * Difficulty:Hard
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 * You may not alter the values in the nodes, only nodes itself may be changed.
 * Only constant memory is allowed.
 * For example,
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * For k = 3, you should return: 3->2->1->4->5
 *
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

翻转多个节点。
if k is 3,
dummy -> 1 -> 2 -> 3 -> 4
  |                     |
 pre                   next
把pre和next之间的都翻转

实现一个子函数来做两个节点之间的翻转。 
dummy -> 1 ->  2 ->  3 -> 4 -> 5
 |                        |
pre                      next

dummy -> 1 ->  2 ->  3 -> 4 -> 5
 |       |     |          |
pre     last  cur        next


          _____________
         |             |
dummy -> 1 -x->  2 ->  3 -> 4 -> 5
 |       |       |          |
pre     last     cur       next



          _____________
         |             |
dummy -> 1 -x->  2 -x->  3 -> 4 -> 5
 | |   |  |                    |
pre|   | last                 next
   |   |
   |_2_|


dummy -> 2 ->  1 ->  3 -> 4 -> 5
 |       |     |          |
pre     cur  last        next

dummy -> 2 ->  1 ->  3 -> 4 -> 5
 |             |     |    |
pre          last   cur  next
 

public ListNode reverseKGroup(ListNode head, int k) {
    if(head == null){
        return null;
    }
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    int count = 0;
    ListNode pre = dummy;
    ListNode cur = head;
    while(cur != null)
    {
        count ++;
        ListNode next = cur.next;
        if(count == k)
        {
            pre = reverse(pre, next);
            count = 0;   
        }
        cur = next;
    }
    return dummy.next;
}
ListNode reverse(ListNode pre, ListNode next) {
        ListNode last = pre->next;
        ListNode cur = last->next;
        while(cur != next) {
            last->next = cur->next;
            cur->next = pre->next;
            pre->next = cur;
            cur = last->next;
        }
        return last;
    }

