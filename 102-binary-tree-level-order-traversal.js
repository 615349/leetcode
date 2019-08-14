Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

思路是
首先设一个数组queue，用来保存要访问的节点，注意是节点，不是指，因为要访问node.left, node.right。也就是说对每个节点查看左右子树，只要存在，就放入queue，实际上就是bfs
再设置一个result数组，再设置一个temp数组，temp数组是用来存每一层的每个节点的指
另外还要知道每一层是否访问完毕了，因此需要设置counter，并且需要知道下一层的counter。因为第一层就一个节点，但之后的层的节点数是未知的。所以每次node.left或者node.right存在，就把下一层的counter++

var levelOrder = function(root) {
    const result = [];
    if (root === null) {
        return result;
    }
    
    const queue = [];
    let temp = [];
    
    let currentLevelCount = 1;
    let nextLevelCount = 0;
    
    queue.push(root);
    
    while(queue.length > 0) {
        const node = queue.shift();
        temp.push(node.val);
        --currentLevelCount;
        
        if (node.left) {
            queue.push(node.left);
            nextLevelCount++;
        }
        
        if (node.right) {
            queue.push(node.right);
            nextLevelCount++;
        }
        
        if (currentLevelCount === 0) {
            result.push(temp);
            currentLevelCount = nextLevelCount;
            nextLevelCount = 0;
            temp = [];
        }
    }
    
    return result;
};



