/**
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 * Difficulty:Hard
 *
 * You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s)
 * in s that is a concatenation of each word in words exactly once and without any intervening characters.
 * For example, given:
 * s: "barfoothefoobarman"
 * words: ["foo", "bar"]
 * You should return the indices: [0,9].
 * (order does not matter).
 *
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

给定一个字符串，和一个数组words，数组里的string都是相同长度的
题目的要求是，求出一个连续的子字符串，包含words里所有的单词

解决方法是sliding window

barfoothefoobarman
|     |
i1   i2

let m = words.length;
let n = words[0].length

i从0开始，每次增加 m*n, i <= string.length - m*n, 因为剩下的是m*n - 1, 从sliding window的角度看，剩余的已经不可能复合条件了

首先有一个map，key是words里面的元素，value是出现的次数
{
    'foo': 1,
    'bar': 1
}

然后在i1和i2之间，使用一个变量j，每次增加n, i.e.
j = i1
j = i1 + n
j = i1 + 2*n
...
j = i1 + (m-1)*n

在j的循环中，使用第二个map，要求每个词都曾经在第一个map里出现。同时出现的次数也一样。
如果这些条件都符合，就把i放到result的数组中

var findSubstring = function (s, words) {
    if (!s.length || !words.length) return [];
    var ans = [];
    var toFind = {};

    var m = words.length;
    var n = words[0].length;

    for (var i = 0; i < m; i++) {
        toFind[words[i]] = (toFind[words[i]] || 0) + 1;
    }

    for (i = 0; i <= s.length - m * n; i++) {
        var found = {};

        for (var j = 0; j < m; j++) {
            var k = i + n * j;
            var w = s.substr(k, n);
            if (!toFind[w]) break;
            found[w] = (found[w] || 0) + 1;
            if (found[w] > toFind[w]) break;
        }
        if (j === m) ans.push(i);
    }

    return ans;

};
