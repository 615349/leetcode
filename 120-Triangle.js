/**
 * https://leetcode.com/problems/triangle/description/
 * Difficulty:Medium
 *
 * Given a triangle, find the minimum path sum from top to bottom.
 * Each step you may move to adjacent numbers on the row below.
 * For example, given the following triangle
 * [
 *      [2],
 *     [3,4],
 *    [6,5,7],
 *   [4,1,8,3]
 * ]
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 * Note:
 * Bonus point if you are able to do this using only O(n) extra space,
 * where n is the total number of rows in the triangle.
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */

三角形的row和column的数目是相等的，所以下面只有一个变量rows
设置一个results数组
从最底层开始
idx	      0	1	2	3
sum[idx]	4	1	8	3
一开始数组的值就是最后一层
接着往上一层。因为倒数第二层只有3个元素，只要更新results前3个元素
很明显的一个公式是
results[j] = triangle[i][j] + Math.min(results[j], results[j+1])
比如说现在来到倒数第二层，要更新第一个元素，那么其结果应该是
其本身的值 + 最后一层的第一个和第二个的最小值
最后一层的第一个元素就是results[0]
最后一层的第二个元素就是results[1] 

到第一层的时候，只需要更新第一个元素，也就是results[0]就是想要的结果

var minimumTotal = function(triangle) {
    const rows = triangle.length;
    
    let results = [];
    
    for(let i = 0; i < rows; i++) {
        results[i] = triangle[rows - 1][i];
    }
    
    for(let i = rows - 2; i >=0; --i) {
        const { length } = triangle[i];
        for(let j = 0; j < length; j++) {
            results[j] = triangle[i][j] + Math.min(results[j], results[j + 1]);
        }
    }
    
    return results[0];
};


