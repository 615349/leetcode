/**
 * https://leetcode.com/problems/same-tree/description/
 * Difficulty:Easy
 *
 * Given two binary trees, write a function to check if they are equal or not.
 * Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

判断两棵树是否相同，其实很简单。
如果两个节点都为空，返回true，因为空也是二叉树
如果两个节点不相同，包括一个节点为空另一个不为空，以及值不想等
如果两个节点都存在，且值相等，则比较左子树和右子树

const helper = (p, q) => {
    if (!p && !q) return true
    if (p && !q || !p && q || p.val !== q.val) return false;
    return helper(p.left, q.left) && helper(p.right, q.right);
}

var isSameTree = function(p, q) {
    return helper(p, q)
};
