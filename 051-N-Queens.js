/**
 * https://leetcode.com/problems/n-queens/description/
 * Difficulty:Hard
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
 *
 * For example,
 * There exist two distinct solutions to the 4-queens puzzle:
 * [
 *  [".Q..",  // Solution 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 *
 *  ["..Q.",  // Solution 2
 *   "Q...",
 *   "...Q",
 *   ".Q.."]
 * ]
 * 2,1 3,2
 */


跟37题，52题一起看

国际象棋的皇后问题。皇后可以吃掉跟自己同一行，同一列，以及自己所在的两条对角线
要求得到所有的解，使得n个皇后都能存在

放皇后的位置放Q，其他位置放.

例如：对于一个4皇后问题，声明一个长度为4的数组（因为行数为4）。
     A[] = [1,0,2,3]表达含义是：
     当前4个皇后所在坐标点为：[[0,1],[1,0],[2,2],[3,3]](前一位是行数，后一位是位置)
     相当于：A[0] = 1, A[1] = 0, A[2] = 2, A[3] = 3 

这样以来，皇后所在的坐标值就能用一维数组表示了。

我们不妨从其中一个条件入手——即相同的一行不能存在两个皇后，
但是又正好是N个皇后又要放在N行上，这就意味着每一行都有且仅有一个皇后
于是我们可以按照这样的方式来枚举这道题目的所有方案：依次枚举每一行皇后的位置，在这个枚举过程中确保不会在每一列、每一条斜线上出现两个皇后。

那么如何“确保不会在每一列、每一条斜线上出现两个皇后”呢？我们可以仿照数独的方法，用3个数组来辅助计算：

column[i]表示第i列是否已经存在皇后
cross1[i]表示第i条左下-右上方向的斜线是否已经存在皇后
cross2[i]表示第i条左上-右下方向的斜线是否已经存在皇后

为什么cross1 and cross2定义的长度是2n - 1？
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
考虑一个这样的数组，那么对角线是
1
2 1
3 2 1
4 3 2 1
4 3 2
4 3
4
将这些分别定义cross1[0], cross1[1], ... cross1[7]
总长度很容易数，看每条对角线的第一个数字，那么就是数组的第一行加最后一列
所以是2n - 1
再考虑对于某一个坐标[i, j]而言，其对应的是哪条对角线呢？
坐标       对角线的index
[0, 0] ==> 0
[0, 1] ==> 1
[1, 0] ==> 1
[0, 2] ==> 2
[1, 1] ==> 2
[2, 0] ==> 2
...
[3, 3] ==> 6
所以对应的对角线index就是i+j

同理，考虑斜对角线
[0, 3] ==> 0
[0, 2] ==> 1
[1, 3] ==> 1
[0, 1] ==> 2
[1, 2] ==> 2
[2, 3] ==> 2
...
[3, 0] ==> 6
所以是
i - j + n - 1 = 斜对角线的index



这下面的三行是最常见的pattern，先设置，调用递归函数后消除之前的设置
current[i][j] = 'Q'; column[j] = true; cross1[i + j] = true; cross2[i - j + n - 1] = true;
dfs(ans, current, i + 1, n, column, cross1, cross2);
current[i][j] = '.'; column[j] = false; cross1[i + j] = false; cross2[i - j + n - 1] = false;

/**
 * @param {number} n
 * @return {string[][]}
 */
class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        // 构造一个初始棋盘
        vector<string> current(n, string(n, '.'));
        // 构造用于判断攻击的数组
        vector<bool> column(n, false);
        vector<bool> cross1(n * 2 - 1, false);
        vector<bool> cross2(n * 2 - 1, false);
        // 回溯求解所有的方案
        dfs(ans, current, 0, n, column, cross1, cross2);
        // 返回所有答案
        return ans;
    }
    void dfs(vector<vector<string>>& ans, vector<string> current, int i, int n, vector<bool>& column, vector<bool>& cross1, vector<bool>& cross2) {
        // 判断是否已经枚举完了每一行的皇后位置，如果是，说明已经找到了一组解
        if (i == n) {
            ans.push_back(current);
        }
        else {
            // 否则枚举当前行皇后放置的位置
            for (int j = 0; j < n; j++) {
                // 判断是否会和之前放置的皇后产生列上的冲突
                if (column[j]) continue;
                // 判断是否会和之前放置的皇后产生第一种对角线上的冲突
                if (cross1[i + j]) continue;
                // 判断是否会和之前放置的皇后产生第二种对角线上的冲突
                if (cross2[i - j + n - 1]) continue;
                // 如果都不产生冲突，说明当前方案合法，对状态进行修改并递归的枚举下一行的放置方案
                current[i][j] = 'Q'; column[j] = true; cross1[i + j] = true; cross2[i - j + n - 1] = true;
                dfs(ans, current, i + 1, n, column, cross1, cross2);
                // 回溯，消去产生的修改
                current[i][j] = '.'; column[j] = false; cross1[i + j] = false; cross2[i - j + n - 1] = false;
            }
        }
    }
};

