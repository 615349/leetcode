You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Example can be found here
https://leetcode.com/problems/populating-next-right-pointers-in-each-node/


题目给的例子里，每个节点的next指针都已经指向null了，所以可以节约一部分操作了


两个思路：
第一，队列，或者数组的方法。遍历同层，将其一个一个push到队列尾，然后从队列头开始一个一个取出来
第二，BFS

先来第二个思路，bfs
对于一个无论多么庞大的二叉树而言，都是可以缩小到这样
    1
   / \
  2   3
 / \ / \
4  5 6  7

对于这样的二叉树，操作就很简单了
root.left.next = root.right
root.left.left.next = root.left.right;
root.left.right.next = root.right.left;
root.right.left.next = root.right.right;

const helper = (left, right) => {
    if (left === null) {
        return;
    }
    
    left.next = right;
    helper(left.left, left.right);
    helper(left.right, right.left);
    helper(right.left, right.right);
}

var connect = function(root) {
    if (root === null) {
        return null;
    }
        
    helper(root.left, root.right);
    return root;
};

再来说第一个思路bfs
简单来说就是把每层的都push到队列，然后从头开始shift出来，将其连接到队列首
对每个取出来的节点，如果其左右子树存在，将他们放入队列

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
            if (i === n-1) {
                top.next = null;
            } else {
                top.next = queue[0]
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

