Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]

这题是输入一个二叉树，而不是一个数组。
inorder就是中序遍历
如果是递归的方式，是比较简单的，先访问左子树，然后根节点，然后右子树

const helper = (root, result) => {
    if (!root) return;
    
    helper(root.left, result);
    result.push(root.val);
    helper(root.right, result);
}

var inorderTraversal = function(root) {
    if (!root) {
        return []
    }
    
    const result = []
    
    helper(root, result);
    
    return result;
};


如果不在外部创建result数组，而是在内部创建，也是可以的
const helper = (root) => {
    if (!root) return;
    
    let result = []
    
    if (root.left) {
        let left = helper(root.left);
        result = [...left]
    }
    result.push(root.val);
    if (root.right) {
        let right = helper(root.right);
        result = [...result, ...right]
    }
    
    return result;
}

var inorderTraversal = function(root) {
    if (!root) {
        return []
    }    
    return helper(root);
};


如果按照题目说的，不用递归，怎么实现的
可以考虑用stack

如果是下面的这个例子，会怎么做呢？
会一直push左子树到底，然后依次pop
        5
       /
      4
     /
    2

如果是下面的情况呢，还是一直push左子树，然后到了最后一个节点，看是否有右子树，有的话，把指针指向这个右子树
为什么指向右子树？而不是找到该节点的parent呢？
因为当该节点的左子树为空，而右子树不为空，说明这个节点本身就是一个parent节点

      5   
     /   
    4   
   /   
  2
   \   
    3  
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    //stack只做三个操作，push，pop和取top值，用数组就可以了
    const stack = [];
    const result = []
    
    let cur = root;
    while(cur || stack.length > 0) {
        //先一路push到最下面的左子树
        while(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        
        //取出最低的左子树，然后指针指向该节点(是parent节点)的右子树
        cur = stack[stack.length - 1];
        result.push(cur.val);
        stack.pop();
        cur = cur.right;
    }
    
    return result;
};


