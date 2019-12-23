Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

首先js的函数只能传值，不能传reference，所以设计一个result对象。
对任何一个节点，都计算其根节点加上左右子树的值。注意左右子树的最小值必须是0
然后对于其节点跟保存的max值进行比较

var helper = function(root, result) {
    let left = 0, right = 0;
    if (root.left) {
        left = Math.max(helper(root.left, result), 0);
    }
    if (root.right) {
        right = Math.max(helper(root.right, result), 0);
    }
    
    result.value = Math.max(result.value, root.val + left + right);
    return root.val + Math.max(left, right);
}

var maxPathSum = function(root) {    
    const result = {
        value: Number.MIN_SAFE_INTEGER
    }
    
    helper(root, result);
    
    return result.value;
};
