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

use dfs to solve it.
create two arrays, one is temp, one is result.
in dfs function, first check if the node is null. if not, push the value of this node to temp array.
if it meets the requirement, push the whole array to result. 
Please note, need to push the copy of the temp array, because the array element would be changed again.

and then check the left tree and right tree.
after that, pop the element as usual

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
