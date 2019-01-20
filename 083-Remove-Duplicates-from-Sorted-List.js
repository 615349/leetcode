/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 * Difficulty:Easy
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
 *
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

这题就比较简单了，直接用两个指针，一个pre，指向前一个元素
一个cur，指向当前的元素

如果pre.val === cur.val，那么pre指向cur的下一个元素

var deleteDuplicates = function(head) {
    if (!head || head.next === null) {
        return head;
    }
    
    let pre = head;
    let cur = head.next;
    while(cur) {
        if (cur.val === pre.val) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }
    
    return head;
};


