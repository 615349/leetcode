Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

使用dfs，查看每个节点的左右子树的高度差。
注意两个细节，
第一，只要任何一个点是false，结果应该就是false，所以在dfs函数里只能有if，不能有else，
并且初始值也设置为true。这样在递归过程中任何一个点是false的，结果就是false的
第二，不能直接传入boolean的值到函数里。原因是把一个值在函数里改变其值并不会改变这个原始值

const dfs = (root, obj) => {
    if(root === null) {
        return 0;
    }
    
    const left = dfs(root.left, obj);
    const right = dfs(root.right, obj);
    if (Math.abs(left - right) > 1) {
        obj.result = false;
    }
    
    return 1 + Math.max(left, right)
}


var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    const obj = {
        result: true
    }
    dfs(root, obj);
    return obj.result;
};
