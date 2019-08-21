Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

这题思路是这样的，首先确定链表的长度，把链表的起点节点和长度这两个参数传入helper函数

在helper函数里，找到以head为起始节点，以length为长度的链表的中点，其必然是root节点的值
root的左子树是从0到midIndex-1，root的右子树是从midIndex+1到length-1
helper函数只要两个参数，起点节点和长度。根据上面的，就很容易了

var sortedListToBST = function(head) {
    if(!head) {
        return null;
    }
    
    let length = 1;
    let temp = head;
    while(temp.next) {
        length++;
        temp = temp.next;
    }
    
    return helper(head, length);
};

const helper = (head, length) => {
    if(head === null || length === 0) return null;
    const midIndex = Math.floor((length-1)/2);
    let tempLength = 0;
    let midNode = head;
    while(tempLength < midIndex) {
        midNode = midNode.next;
        tempLength++;
    }
    const root = new TreeNode(midNode.val);
    root.left = helper(head, midIndex);
    root.right = helper(midNode.next, length - midIndex - 1);
    return root;
}
