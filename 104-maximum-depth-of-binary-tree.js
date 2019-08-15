Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

这个一般都是用recursive，只要注意不会无限循环就行
如果该节点为空，那么返回0
如果该节点不为空，那么返回其左子树和右子树的最大值加上1，也就是说如果左右子树都是空，那么就应该返回1


var maxDepth = function(root) {
    if(root === null) {
        return 0;
    }
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
