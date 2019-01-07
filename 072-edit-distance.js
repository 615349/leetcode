Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character


Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')


Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

首先用dp应该没有疑问
dp[i-1][j-1]表示word1的前i位和word2的前j位需要操作多少次

初始化：
dp[0][0]肯定是0了，两个string都是空，需要0步两个string就相等了
接着考虑其中一个string为空
如果word2为空，那么dp[i][0] = i, 因为一个string有i位，一个为空，那么删除i次就可以了
同理，如果word1为空，dp[0][i] = i, 因为只要insert i次就可以了

接着考虑最普通的情况
如果第一个字符串的第i位和第二个字符串的第j位相等，即word1[i-1] === word2[j-1], 那么可以得到一个结论，其dp值必然与i-1和j-1的dp相等，因为最后一位相同，不用再做任何操作

如果第i位和第j位不相等呢，可以由
a) i-1和j-1的基础上，replace最后一位就可以了，所以dp[i][j]=dp[i-1][j-1]+1
b) i-1和j的基础上，再insert最后一位就可以了，所以dp[i][j]=dp[i-1][j]+1
c) i和j-1的基础上，再delete最后一位就可以了，所以dp[i][j]=dp[i][j-1]+1
只要取最小值就可以了

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n1 = word1.length;
    const n2 = word2.length;
    
    const dp = [];
    while(dp.push(new Array(n2 + 1)) < n1 + 1);
    
    for(let i = 0; i <= n2; i++) {
        dp[0][i] = i;
    }
    
    for(let i = 1; i <= n1; i++) {
        dp[i][0] = i;
    }
    
    for(let i = 1; i <= n1; i++) {
        for(let j = 1; j <= n2; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                let min = Math.min(dp[i-1][j], dp[i][j-1]);
                min = Math.min(min, dp[i-1][j-1]);
                dp[i][j] = min + 1;
            }
        }
    }
    
    return dp[n1][n2];
};
