/**
 * https://leetcode.com/problems/valid-sudoku/description/
 * Difficulty:Medium
 *
 * Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 * A partially filled sudoku which is valid.
 * Note:
 * A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
 *
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */

[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]


九宫格游戏，横有9个格子，竖着有9个格子，判断是否valid
需要判断横线是否有重复，竖着是否有重复，小格子是否有重复

class Solution {
public:
    bool isValidSudoku(vector<vector<char> > &board) {
        if(board.size()!=9 || board[0].size()!=9) return false;
        
        // check row
        for(int i=0; i<9; i++) {
            vector<bool> used(9,false);
            for(int j=0; j<9; j++) {
                if(board[i][j] == '.') continue; 
                int k = board[i][j]-'0';
                if(k==0 || used[k-1]) return false;
                used[k-1] = true;
            }
        }
        
        //check col
        for(int j=0; j<9; j++) {
            vector<bool> used(9,false);
            for(int i=0; i<9; i++) {
                if(board[i][j] == '.') continue;
                int k = board[i][j]-'0';
                if(k==0 || used[k-1]) return false;
                used[k-1] = true;
            }
        }
        
        // check subbox
        for(int i=0; i<3; i++) {
            for(int j=0; j<3; j++) {
                int row = 3*i;
                int col = 3*j;
                vector<bool> used(9,false);
                for(int m=row; m<row+3; m++) {
                    for(int n=col; n<col+3; n++) {
                        if(board[m][n] == '.') continue;
                        int k = board[m][n]-'0';
                        if(k==0 || used[k-1]) return false;
                        used[k-1]=true;
                    }
                }
            }
        }
        
        return true;
    }
};
