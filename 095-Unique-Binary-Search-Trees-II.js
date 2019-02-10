/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 * Difficulty:Medium
 *
 * Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.
 *
 * For example,
 * Given n = 3, your program should return all 5 unique BST's shown below.
 *
 *  1         3     3      2      1
 *   \       /     /      / \      \
 *    3     2     1      1   3      2
 *   /     /       \                 \
 *  2     1         2                 3
 *
 */

这个要产生分别以1，2，..., n为root的bst，因此要有一个循环从1到n
同时看到如果左子树或者右子树为空的话，需要push null

在这个循环里面，以i为root，那么start到i-1都是左子树
以i+1到end都是右子树
在循环里面做一个递归，来产生左子树和右子树

注意哦，左子树和右子树可能有多个，比如以1为root的情况，有两个情况
左子树两个情况都是null，右子树则有两个情况, 即上面第一和第五两个情况
则right.length === 2
所以，我们需要对左子树数组和右子树数组都进行循环


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function generateBST(start, end) {
    let list = [];
    
    if (start > end) {
        return [null]
    }
    
    for(let i = start; i <= end; i++) {
        let left = generateBST(start, i - 1);
        let right = generateBST(i + 1, end);
        for(let j = 0; j < left.length; j++) {
            for(let k = 0; k < right.length; k++) {
                //必须每次都new一个新的node，并且必须在循环内new
                //否则会有push后的值会被覆盖的可能
                let node = new TreeNode(i);
                node.left = left[j];
                node.right = right[k];
                list.push(node);
            }
        }
    }
    
    return list;
}

var generateTrees = function(n) {    
    if (n === 0) {
        return [];
    }
    
    return generateBST(1, n);
};
