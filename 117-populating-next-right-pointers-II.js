Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

跟116差不多，除了二叉树可能左右子树不一定存在

用queue的方法是不在乎是否有空的左右子树的

var connect = function(root) {
    if (root === null) {
        return null;
    }
    
    const queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
       const n = queue.length;
        
        for(let i = 0; i < n; i++) {
            const top = queue.shift();
            if (i === n - 1) {
                top.next = null;
            } else {
                top.next = queue[0];
            }
            
            if (top.left) {
                queue.push(top.left);
            }
            
            if (top.right) {
                queue.push(top.right);
            }
        }
    }
    return root;
};
