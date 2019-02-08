/**
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 * Difficulty:Medium
 *
 * Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
 * For example,
 * Given n = 3, there are a total of 5 unique BST's.
 *
 *   1         3     3      2      1
 *    \       /     /      / \      \
 *    3      2     1      1   3      2
 *   /      /       \                 \
 *  2      1         2                 3
 *
 */


n = 0

n = 1
1

n = 2
   1                  2
     \                /
      2            1

n = 3
   1           3    3       2       1
    \        /     /       / \       \
     3      2     1       1   3        2
    /     /        \                    \
   2     1          2                    3


定义f(n)为unique BST的数量，以n = 3为例：

构造的BST的根节点可以取{1, 2, 3}中的任一数字。

如以1为节点，
则left subtree只能有0个节点, 就是f(0)
right subtree有2, 3两个节点，那右子树就相当于f(2)。
所以left/right subtree一共的combination数量为：
左子树f(0) * 右子树f(2) = 2

以2为节点，
则left subtree只能为1，那就是f(1)，
right subtree只能为2：
所以左子树f(1) * 右子树f(1) = 1

以3为节点，
则left subtree有1, 2两个节点，就是f(2)，
right subtree有0个节点：
所以左子树f(2)*右子树f(0) = 2

所以f(n) = f(0) * f(n-1) + f(1) * f(1) + f(2) * f(0)

var numTrees = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i-1-j];
        }
    }
    
    return dp[n]
};
