Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

解题的思路是每次把sum减去当前节点的值，然后计算左右子树
需要注意的是，如果节点为空，应当返回false, 分成两个部分讨论：
如果是原始的函数本身，如果节点为空，不管sum是0还是其他值，都不成立，所以返回false
如果是helper函数，题目要求是root到leaf。其中leaf的定义是没有左子树也没有右子树。会进到root为空的情况，有且仅有该parent节点有且仅有一个节点，这种情况根据我们的题目要求是返回false的


var helper = function(root, sum) {
    if (root === null) {
        return false;
    }
    
    if (root.left === null && root.right === null) {
        return sum === root.val;
    }
    
    return helper(root.left, sum - root.val) || helper(root.right, sum - root.val);
}

var hasPathSum = function(root, sum) {
    if (root == null)
        return false;
    return helper(root, sum)
};
