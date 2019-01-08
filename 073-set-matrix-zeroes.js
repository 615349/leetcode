Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

Example 2:
Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

此题主要考察空间复杂度。对时间复杂度不做什么要求
这里主要有一个知识点，-0
1/-0 === -Infinity
1/0 === Infinity
0 === -0
0 && -0 === 0

如果一个点本来就是0，要怎么赋值？
matrix[i][j] = matrix[i][j] && -0;

如果要判断一个点是本身就是0，还是被赋值改变成0的？
matrix[i][j] === 0 && 1/matrix[i][j] === Infinity

var setZeroes = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return matrix;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    
    for(let i = 0; i < m; i++) 
        for(let j = 0; j < n; j++)
            /* 保证只对原来值就是0的点处理。赋值后值为0的点忽略 */
            if (matrix[i][j] === 0 && 1/matrix[i][j] === Infinity) {
                /* 如果j列本身有两个0，要保证赋值不会覆盖原来的值
                 * 所以不能if(x === i) continue;
                 * 因为这只能保护一点，不能保护其他点为0
                 */
                for(let x = 0; x < m; x++) {
                    matrix[x][j] = matrix[x][j] && -0;
                }
                
                for(let y = 0; y < n; y++) {
                    matrix[i][y] = matrix[i][y] && -0;
                }
            }

    return matrix;
};


