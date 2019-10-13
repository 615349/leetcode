Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6


这个题目要求in place，也就是说最好不要用stack的方式来申请额外的空间

思路是分四种情况，
第一种，root本身是空的，直接返回
第二种，root不为空，但是左子树为空，对root右子树进行遍历
第三种，root不为空，但是右子树为空，root的右子树指向左子树，左子树指向空，对右子树进行遍历
第四种，都不为空。
那么对其左子树右子树分别进行遍历。
在遍历左子树右子树之后需要将左子树放在root跟root的右子树之间
    1
   / \
  2   5
 / \   \
3   4   6
将下列看成左子树
  2
 / \
3   4
将下列看成右子树
5
 \
  6

在遍历后需要4.right -> 5
let node = root.left;
while(node.right) {
  node = node.right;
}
首先找到左子树的最右边的节点
然后将该node.right -> root.right
然后root.right -> root.left
root.left设为空

var flatten = function(root) {
    if (root === null) {
        return root;
    }
    
    if(root.left === null) {
        flatten(root.right);
        return root;
    }
    
    if (root.right === null) {
        root.right = root.left;
        root.left = null;
        flatten(root.right);
        return root;
    }
    
    flatten(root.left);
    flatten(root.right);
    
    let node = root.left;
    while(node.right) {
        node = node.right;
    }
    
    node.right = root.right;
    root.right = root.left;
    root.left = null;
    return root;
};
