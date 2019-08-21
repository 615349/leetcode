Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

既然已经排序好的，那么root就是中点。考虑数组的长度是奇数和偶数两种情况，可以得出
const rootIndex = Math.floor((nums.length - 1)/2);
那么接下来就跟之前的preorder，inorder差不多了。在rootIndex之前的都是左子树，rootIndex以后的都是右子树

var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    
    return helper(nums);
};

const helper = (nums) => {
    if(!nums || nums.length === 0) {
        return null;
    }
    
    const rootIndex = Math.floor((nums.length - 1)/2);
    const root = new TreeNode(nums[rootIndex]);
    root.left = helper(nums.slice(0, rootIndex));
    root.right = helper(nums.slice(rootIndex + 1));
    return root;
}


