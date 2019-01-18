Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example:

Input: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

Output: ["eat","oath"]

做法基本跟079一样，唯一的一个区别，要注意不能把同样的string push到result数组

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const dfs = (board, word, visited, i, j, index) => {
    if(index === word.length) return true;
    
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] !== word[index])
        return false;
    
    visited[i][j] = true;
    const result = dfs(board, word, visited, i-1, j, index+1) ||
                   dfs(board, word, visited, i+1, j, index+1) ||
                   dfs(board, word, visited, i, j+1, index+1) ||
                   dfs(board, word, visited, i, j-1, index+1)
    visited[i][j] = false;
    
    return result;
}

var findWords = function(board, words) {
    const result = [];
    if (!board || !words || board.length === 0 || board[0].length === 0 || words.length === 0) {
        return result;
    }
    
    const x = board.length;
    const y = board[0].length;
    const z = words.length;
    
    const visited = [];
    while(visited.push(new Array(y).fill(false)) < x);
        
    for(let k = 0; k < z; k++){
        let index = 0;
        
        for(let i = 0; i < x; i++) {
            for(let j = 0; j < y; j++) {
                 if(dfs(board, words[k], visited, i, j, index) && !result.includes(words[k])) {
                     result.push(words[k])
                 } 
            }
        }
    }
    
    return result;
};
