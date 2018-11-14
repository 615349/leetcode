You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]


思路：
先沿着斜对角互换一次，然后沿着x轴的中线上下互换
比如
1 2 3
4 5 6
7 8 9

沿着斜对角互换一次后得到
9 6 3
8 5 2
7 4 1
从坐标角度看：
[0, 0] <===> [2, 2]
[1, 0] <===> [2, 1]
[0, 1] <===> [1, 2] 
然后第一行和最后一行互换，第二行和n-2行互换。。。
7 4 1
8 5 2
9 6 3
从坐标角度看：
[0, 0] <===> [2, 0]
[0, 1] <===> [2, 1]
[0, 2] <===> [2, 2]

注意，[0，0]是左上角

const rotate = array => {
  const len = array.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i + j <= len - 2) {
        let a = len - 1 - i;
        let b = len - 1 - j;
        array[i][j] = array[i][j] ^ array[b][a];
        array[b][a] = array[i][j] ^ array[b][a];
        array[i][j] = array[i][j] ^ array[b][a];
      }
    }
  }

  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < len; j++) {
      let a = len - 1 - i;
      array[i][j] = array[i][j] ^ array[a][j];
      array[a][j] = array[i][j] ^ array[a][j];
      array[i][j] = array[i][j] ^ array[a][j];
    }
  }
};

小知识点：
如果互换两个数
最简单的当然是
tmp = a;
a = b;
b = tmp;

如果要效率更高，或者说不借助额外的变量，那么
a = a ^ b;
b = a ^ b;
a = a ^ b;

第二句
b = a ^ b ^ b;
b ^ b is 0, a ^ 0 is a. (假如a是110110 ^ 0 = 110110， 因为1和0不同，不同所以为1，0和0相同，相同所以为0)
第三局
a = a ^ b, 这里a = a ^ b, b = a
so
a = a ^ b ^ a === b
