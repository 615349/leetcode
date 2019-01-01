Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

发音是
spīrəl，螺旋形

其实这题相当的简单, 和059一起看

设置一个方向变量direction，依次为向右，向下，向左，向上
分别用0，1，2，3代替，然后每次走完一个行或者列，direction加1
用top，right，bottom和left分别表示当前的最上面，最右边，最下边和最左边的index
每次走完一行或者一列，上述四个变量的其中一个必然要减1或加1
比如走完了最上面这行，top就要加1，如果走完了最右边，那么--right

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const result = [];
  if (!matrix || matrix.length === 0) {
    return result;
  }

  let direction = 0,
    left = 0,
    top = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1,
    i = 0;

  while (true) {
    switch (direction) {
      // go right
      case 0: {
        for (i = left; i <= right; i++) {
          result.push(matrix[top][i]);
        }
        ++top;
        break;
      }
      //go down
      case 1: {
        for (i = top; i <= bottom; i++) {
          result.push(matrix[i][right]);
        }
        --right;
        break;
      }
      //go left
      case 2: {
        for (i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        --bottom;
        break;
      }
      //go up
      case 3: {
        for (i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        ++left;
        break;
      }
    }
    if (left > right || top > bottom) {
      return result;
    }
    direction = (direction + 1) % 4;
  }
};


