Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7


对于左子树右子树来说，一般都是用递归完成。
回到本题，我能很快的找到root是3，那么我希望构造这样的树
     3
    / \
左子树 右子树

如何构造左子树？我希望先在preorder里面找到左子树的index的范围，
const preorderSubLeft = preorder.slice(1, index + 1);
因为preorder[0]是root，在preorder里面左子树的最右边是index，也就是说在preorder里面，左子树的范围是[1, index]
slice函数是不包括右边的，所以是slice(1, index + 1);

然后在inorder里面找到左子树的index范围
const inorderSubLeft = inorder.slice(0, index);
在inorder里面，左子树的范围是从0到index-1
然后对两个小数组里继续找

同理对于右子树也是一样的方法构造
在preorder数组里，右子树的范围是index+1到结束
在inorder数组里，右子树的范围是index+1到结束

这样就简单了，先构造一个root节点
const root = new TreeNode(preorder[0]);
root.left = helper(preorderSubLeft, inorderSubLeft);
root.right = helper(preorderSubRight, inorderSubRight);
return root;

var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder || preorder.length !== inorder.length) {
        return null;
    }
    
    return helper(preorder, inorder);
};

const helper = (preorder, inorder) => {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    
    const rootValue = preorder[0];
    const root = new TreeNode(rootValue)
    
    const index = inorder.indexOf(rootValue);
    
    const preorderSubLeft = preorder.slice(1, index + 1);
    const preorderSubRight = preorder.slice(index + 1);
    const inorderSubLeft = inorder.slice(0, index);
    const inorderSubRight = inorder.slice(index + 1);
    
    root.left = helper(preorderSubLeft, inorderSubLeft);
    root.right = helper(preorderSubRight, inorderSubRight);
    
    return root;
}

