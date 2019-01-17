Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

这种题肯定又是dfs了
注意，题目的一个要求是每个元素只能访问一次
所以需要创立一个跟board一样的数组，里面的元素全是bool


所以在主函数里面进行双层循环，把每个元素放入dfs进行判断
该元素跟word里面的index对应的元素不同，那肯定是return false
同时如果visited的bool数组对应的已经访问过了，那么也return false
如果该元素与word[index]相等，
那么接下来就要判断元素的上下左右的下一个元素与word[index+1]是否相等

另外如果该元素在二维数组的最上面或者最下面或者最左边或者最右边，那要怎么判断
所以直接判断i和j是否在范围内

如果已经比到最后一个元素并且相等了，那么说明成功了

const dfs = (board, word, visited, m, n, i, j, index) => {
    if (index === word.length) return true;
    if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || board[i][j] !== word[index]) {
         return false;
    }
    
    visited[i][j] = true;
    const result = dfs(board, word, visited, m, n, i-1, j, index+1) ||
                   dfs(board, word, visited, m, n, i+1, j, index+1) ||
                   dfs(board, word, visited, m, n, i, j-1, index+1) ||
                   dfs(board, word, visited, m, n, i, j+1, index+1)
    
    visited[i][j] = false;
    return result
}


var exist = function(board, word) {
    if (!board || !word || board.length === 0 || board[0].length === 0 || word.length === 0) {
        return false;
    }
    
    const m = board.length;
    const n = board[0].length;
    
    const visited = [];    
    while(visited.push(new Array(n).fill(false)) < m);
    
    const index = 0;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (dfs(board, word, visited, m, n, i, j, index)) return true;
        }
    }
    
    return false;
};
