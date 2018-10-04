/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 * Difficulty:Medium
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
 *
 */

首先建立一个node，该node指向head，那么返回的时候直接返回该node的指向就可以了

node -> 1 -> 2 -> 3 -> 4 -> 5

如果现在要交换3，4两个点，那么需要改动2，3，和4节点（因为2的指向也改变了）

因此创建一个节点prev，并建立一个函数，以prev为入参
function swap(prev) {    
    var middle = prev.next;
    var tail = prev.next.next;
    
    middle.next = tail.next;
    prev.next = tail;
    tail.next = middle;
}

一开始的prev指向node，假设做了一些swap之后，prev向右移动了。那么时候停止呢？上面说了，是三个一组进行交换的。
比如现在prev指向了2，如果3或者4不存在，那么就停止了
也就是说如果prev的一下个节点或者下下个节点就停止循环了

每交换一次，向右移动两格

function swapPairs(head) {
    var node = new ListNode(0);
    node.next = head;
    var prev = node;
    while(prev.next == null || prev.next.next == null) {
        swap(prev);
        prev = prev.next.next;
    }
    
    return node.next;
}



