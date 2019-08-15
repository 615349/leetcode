Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]


跟102题基本一致，原来是对于temp而言，直接push就行，但现在要分是否是奇数行。如果是，则要进行unshift

var zigzagLevelOrder = function(root) {
    const result = [];
    
    if (root === null) {
        return result;
    }
    
    const queue = [];
    let temp = [];
    let currentLevelCount = 1;
    let nextLevelCount = 0;
    let isOdd = true;
    
    queue.push(root);
    
    while(queue.length > 0) {
        let node = queue.shift();
        --currentLevelCount;
        isOdd? temp.push(node.val) : temp.unshift(node.val);
        
        
        if(node.left) {
            queue.push(node.left);
            nextLevelCount++;
        }

        if(node.right) {
            queue.push(node.right);
            nextLevelCount++;
        }
        
        
        if(currentLevelCount === 0) {
            currentLevelCount = nextLevelCount;
            nextLevelCount = 0;
            result.push(temp);
            temp = [];
            isOdd = !isOdd;
        }
    }
    
    return result;
};
