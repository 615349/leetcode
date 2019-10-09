Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:
[
   [5,4,11,2],
   [5,8,4,5]
]

使用dfs解决。创建两个数组，一个是当前数组temp，一个是最终的数组result
在dfs函数里，首先看当前节点是否为空。如果为空，之前返回。
如果不是空，先把这个节点push到temp数组。
如果该节点是leaf，且值跟sum相等，则把该temp数组push到result数组
注意，push的时候需要把temp拷贝一次，因为该数组的元素之后还会变化

接着对当前节点的左右子树进行递归。
最后从temp数组pop出当前节点

var dfs = function(root, sum, temp, result) {
    if (root === null) {
        return;
    }
    
    temp.push(root.val);
    
    const diff = sum - root.val;
    
    if (diff === 0 && root.left === null && root.right === null) {
        const arr = [...temp]
        result.push(arr);
    }
    
    dfs(root.left, diff, temp, result);
    dfs(root.right, diff, temp, result);
    
    temp.pop();
}

var pathSum = function(root, sum) {
    const result = [];
    if (root === null) {
        return result;
    } 
    
    const temp = [];
    dfs(root, sum, temp, result);
    return result;
};
