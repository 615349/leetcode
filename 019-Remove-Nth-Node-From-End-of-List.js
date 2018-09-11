/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 * Difficulty:Medium
 *
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * For example,
 *  Given linked list: 1->2->3->4->5, and n = 2.
 *  After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note:
 *  Given n will always be valid.
 *  Try to do this in one pass.
 *
 */

首先定义
function ListNode(val = 0) {
    this.val = val;
    this.next = null;
}

可以通过new的方式得到节点
const node = new ListNode();

可以跟面试官讨论n是否比list node的长度长。看了其他答案，基本假定n比长度短

思想是很简单的，两个指针，一个先向前走n步，然后第一个和第二个一起走。第一个走到最后一个点的时候，第二个所在的就是要删除的点
注意删除只需要
slow.next = slow.next.next


public static ListNode removeNthFromEnd(ListNode head, int n) {
        if(head == null || head.next == null)
            return null;
            
        ListNode faster = head;
        ListNode slower = head;
        
        for(int i = 0; i<n; i++)
            faster = faster.next;
            
        if(faster == null){
            head = head.next;
            return head;
        }
        
        while(faster.next != null){
            slower = slower.next;
            faster = faster.next;
        }
        
        slower.next = slower.next.next;
        return head;
        
}
