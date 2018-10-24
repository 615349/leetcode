/**
 * https://leetcode.com/problems/sudoku-solver/description/
 * Difficulty:Hard
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * Empty cells are indicated by the character '.'.
 * You may assume that there will be only one unique solution.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

九宫格游戏，已经填了部分的格子，计算出剩余格子应该填什么

典型的dfs，跟51题n-queen 一起看

i和j的两层循环，如果发现任何一个点不是数字，那么对该点进行从1到9进行匹配
放入任何一个数字如果是valid，那么就把这个格子放入这个数字，然后进行recursive
判断是否valid的方法是，在这一行，一列，以及本身格子里进行判断是否有重复，有则invalid

如果完全没有遇到点，遇到的全是数字，则直接返回true，已经找到答案了


var solveSudoku = function (board) {
    solve(board);
};

function solve(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (var k = 1; k <= 9; k++) {
                    if (isValid(i, j, board, '' + k)) {
                        board[i][j] = '' + k;
                        if (solve(board)) {
                            return true;
                        } else {
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(row, col, board, t) {
    for (var i = 0; i < 9; i++) {
        var ch = board[row][i];
        if (ch === t) return false;

        ch = board[i][col];
        if (ch === t) return false;

        ch = board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3];
        if (ch === t) return false;
    }
    return true;
}
