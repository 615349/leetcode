Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]

和054一起看，两题基本相同

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = [];
    
    if(n <= 0) return result;
    
    while(result.push(new Array(n)) < n);
    
    let top = 0,
        right = n - 1,
        bottom = n - 1,
        left = 0,
        direction = 0,
        i = 0,
        count = 0;
    
    while(true) {
        switch(direction) {
            case 0: {
                for(i = left; i <= right; i++) {
                    result[top][i] = ++count;
                }
                ++top;
                break;
            }
            case 1: {
                for(i = top; i <= bottom; i++) {
                    result[i][right] = ++count;
                }
                --right;
                break;
            }
            case 2: {
                for(i = right; i >= left; i--) {
                    result[bottom][i] = ++count;
                }
                --bottom;
                break;
            }
            case 3: {
                for(i = bottom; i >= top; i--) {
                    result[i][left] = ++count;
                }
                ++left;
                break;
            }
        }
        if (left > right || top > bottom) return result;
        direction = (direction + 1) % 4;
    }
};
