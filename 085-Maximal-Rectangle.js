/**
 * https://leetcode.com/problems/maximal-rectangle/description/
 * Difficulty:Hard
 * Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 * For example, given the following matrix:
 *
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 *
 * Return 6.
 *
 */

这题是84题的基础上的follow up
看上去很难，实际上是很简单的，就是把二维数组转换为84的模式。
怎么转换呢？
设立一个height数组，里面有n个元素
以i行为例，如果matrix[i][j]为0，那么height[j] = 0,
如果matrix[i][j]是1，那么height[j] = 1 + height[j]，也就是说如果matrix[i-1][j]是1，那么height[j]就是2了

画图一下
[
	0	1	0	1
	1	1	0	0
]

将第一行看成
0	1	0	1
将第二行看成
1	2	0	0

以此类推，这道题就转换为84题了

var largestRectangleArea = function(heights) {
    if(!heights || heights.length === 0) {
        return 0;
    }
    
    if (heights.length === 1) {
        return heights[0];
    }
    
    let result = -1;
    let count = 0;
    let barHeight = 0;
    
    for(let i = 0; i < heights.length; i++) {
        count = 1;
        barHeight = heights[i];
        for(let j = i - 1; j >= 0; j--) {
            if (heights[j] >= barHeight) {
                count++;
            } else {
                break;
            }
        }
        
        for(let k = i+1; k< heights.length; k++) {
            if (heights[k] >= barHeight) {
                count++;
            } else {
                break;
            }
        }
        
        result = Math.max(result, count*barHeight);
    }
    
    return result;
};

var maximalRectangle = function(matrix) {
    let result = 0;
    
    if (!matrix || matrix.length === 0) {
        return result;
    }
    
    const m = matrix.length;
    if (m === 0) return result;
    
    const n = matrix[0].length;
    if (n===0) return result;
    
    const height = new Array(n).fill(0);
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            height[j] = matrix[i][j] === '0' ? 0 : 1 + height[j];
        }
        result = Math.max(result, largestRectangleArea(height))
    }
    
    
    
    return result;
};

