/**
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 * Difficulty:Hard
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 */

这是我见过最好的答案，使用reduce来遍历, 然后退化为merge2Lists

/* js array reduce */
array.reduce(callback(accumulator, currentValue)[, initValue]);
对应于下面的情况，a就是accumulator，b是currentValue, null是initValue

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    return lists.reduce((a, b) => merge2lists(a, b), null)
};

function merge2lists(a, b) {
    if (!a && !b) return null;
    if (!a) return b;
    if (!b) return a;
    var h;
    if (a.val < b.val) {
        h = a;
        a = a.next;
    } else {
        h = b;
        b = b.next;
    }
    var t = h;

    while (a && b) {
        if (a.val < b.val) {
            t.next = a;
            t = t.next;
            a = a.next;
        } else {
            t.next = b;
            t = t.next;
            b = b.next;
        }
    }
    if (a) t.next = a;
    if (b) t.next = b;
    return h;
}
