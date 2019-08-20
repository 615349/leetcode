Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

基本上跟105一样

var buildTree = function(inorder, postorder) {
    if(!inorder || !postorder || inorder.length !== postorder.length) {
        return null;
    }
    
    return helper(inorder, postorder);
};

const helper = (inorder, postorder) => {
    const len = postorder.length;
    
    if(inorder.length === 0 || len === 0) {
        return null;
    }
    
    const rootValue = postorder[len - 1];
    const root = new TreeNode(rootValue);
    
    const index = inorder.indexOf(rootValue);
    
    const inorderSubLeft = inorder.slice(0, index);
    const inorderSubRight = inorder.slice(index + 1);
    
    const postorderSubLeft = postorder.slice(0, index);
    const postorderSubRight = postorder.slice(index, len-1);
    
    root.left = helper(inorderSubLeft, postorderSubLeft);
    root.right = helper(inorderSubRight, postorderSubRight);
    
    return root;
}
