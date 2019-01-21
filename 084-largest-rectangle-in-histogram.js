Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

这题看上去不简单，有多种解法，主要是stack以及两重循环
stack的解法过于难了
双重循环也能过了，其思想就非常简单

对于每个点i而言，都做两件事：
分别从i+1开始循环到结束，看哪个元素的高度大于等于当前的heights[i]。
因为如果某个元素小于i，那么整个面积就会小了
然后从i-1开始循环，做同样的事

/**
 * @param {number[]} heights
 * @return {number}
 */
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
