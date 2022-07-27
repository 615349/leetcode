/**
 * https://leetcode.com/problems/palindrome-number/description/
 * Difficulty:Easy
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */

思路：
首先发端是否是负数，是，直接返回
接着反一下这个数，判断是否相等于原数

var isPalindrome = function (x) {
    if (x < 0) return false;
    var t = x;
    x = Math.abs(x);
    var p = 0;
    while (x) {
        p = p * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return t === p;
};

另外一个方法是将数字转换为字符串，使用两个指针从两边移动

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    if (x === 0) {
        return true;
    }
    
    const strX = x.toString();
    const { length } = strX;
    
    let left = 0;
    let right = length - 1;
    
    let result = true;
    while (left < right) {
        if (strX[left] !== strX[right]) {
            result = false;
            break;
        }
        ++left;
        --right;
    }
    
    return result;
};
