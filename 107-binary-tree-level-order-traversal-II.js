Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

跟102基本差不多。除了用shift, unshift

var levelOrderBottom = function(root) {
    const result = [];
    if(root === null) {
        return result;
    }
    
    let temp = [];
    let currentLevelCounter = 1;
    let nextLevelCounter = 0;
    
    const queue = [];
    queue.push(root);
    
    while(queue.length !== 0) {
        const node = queue.shift();
        currentLevelCounter--;
        temp.push(node.val);
        
        if(node.left) {
            nextLevelCounter++;
            queue.push(node.left);
        }
        
        if(node.right) {
            nextLevelCounter++;
            queue.push(node.right);
        }
        
        if(currentLevelCounter === 0) {
            result.unshift(temp);
            temp = [];
            currentLevelCounter = nextLevelCounter;
            nextLevelCounter = 0;
        }
    }
    
    return result;
};
