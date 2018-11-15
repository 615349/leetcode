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
 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function reverse(prev, next) {
  let last = prev.next;
  let cur = last.next;
  while (cur !== next) {
    last.next = cur.next;
    cur.next = prev.next;
    prev.next = cur;
    cur = last.next;
  }
  return last;
}

var reverseKGroup = function(head, k) {
  if (head === null || head.next === null || k === 1) {
    return head;
  }

  const dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let current = head;
  let count = 0;
  while (current) {
    ++count;
    let next = current.next;
    if (count === k) {
      prev = reverse(prev, next);
      count = 0;
    }
    current = next;
  }

  return dummy.next;
};



