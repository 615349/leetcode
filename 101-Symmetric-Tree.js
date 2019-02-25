/**
 * https://leetcode.com/problems/symmetric-tree/description/
 * Difficulty:Easy
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *      1
 *    /  \
 *   2    2
 *  / \  / \
 * 3  4 4   3
 * But the following [1,2,2,null,3,null,3] is not:
 *      1
 *     / \
 *    2   2
 *    \    \
 *     3    3
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

要看是否对称，就做一件事，比较把两个节点的左子树和右子树交叉比较

function helper(p, q) {
    if (!p && !q) return true;
    if (p && !q || !p && q || p.val !== q.val) return false;
    return helper(p.left, q.right) && helper(p.right, q.left);
}

var isSymmetric = function(root) {
    if (!root) return true;
    return helper(root.left, root.right)
};
