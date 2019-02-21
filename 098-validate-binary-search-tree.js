Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:

Input:
    2
   / \
  1   3
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6
Output: false
Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
             is 5 but its right child's value is 4.

做法相当简单，对于任何一个左子树来说，其值的范围必须在无穷小和其parent node的值之间
对于右子树，其值的范围是parent node value和无穷大之间
这里有点要注意，不能使用~(1 << 31)来得到最大值，因为如果是刚好root的值是~(1<<31), 会return false，这是不对的
所以更大的范围，是Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER


const helper = (root, min, max) => {
    if (!root) {
        return true;
    }
    
    if (root.val <= min || root.val >= max) {
        return false;
    }
    
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}


var isValidBST = function(root) {
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
