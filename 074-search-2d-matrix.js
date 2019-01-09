Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false


这题千万不要看高了它，就一个最简单的大一学生也知道的方法：
将二维数组降维成一维数组来处理（每行开始的元素比前一行的最后一个元素大说明了这一点）

var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    
    let left = 0, right = m*n - 1;
    let middle, row, col;
    
    while(left <= right) {
        middle = left + Math.floor((right - left)/2);
        col = middle % n;
        row = Math.floor(middle/n);
        
        if(target === matrix[row][col]) {
            return true;
        } else if (target > matrix[row][col]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    return false;
};
