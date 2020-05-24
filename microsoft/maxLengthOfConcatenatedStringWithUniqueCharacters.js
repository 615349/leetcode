Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.


Example 1:
Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.

Example 2:
Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".

Example 3:
Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26

做法跟之前的题差不多，但是之前的题，比如由两个或者以上组成。这题可以由一项组成
https://github.com/615349/leetcode/blob/master/microsoft/concatenatedStringLengthWithUniqueCharacters.js
所以只需要把第四个参数multipleWords删除即可
