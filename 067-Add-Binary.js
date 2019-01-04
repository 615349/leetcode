/**
 * https://leetcode.com/problems/add-binary/description/
 * Difficulty:Easy
 * Given two binary strings, return their sum (also a binary string).
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

跟066类似，不同的是上一题是对10 mod，实际上binary相加就是对2 mod

var addBinary = function(a, b) {
    let n1 = a.length - 1;
    let n2 = b.length - 1;
    
    let carrier = 0, sum;
    const result = [];
        
    while(n1 >= 0 && n2 >=0) {
        sum = Number(a.charAt(n1)) + Number(b.charAt(n2)) + carrier;
        carrier = Math.floor(sum/2);
        result.unshift(sum%2);
        --n1;
        --n2;
    }
    
    while (n1 >= 0) {
        sum = Number(a.charAt(n1)) + carrier;
        carrier = Math.floor(sum/2);
        result.unshift(sum%2);
        --n1;
    }
    
    while(n2 >= 0) {
        sum = Number(b.charAt(n2)) + carrier;
        carrier = Math.floor(sum/2);
        result.unshift(sum%2);
        --n2;
    }
    
    carrier === 1 && result.unshift(1);
    
    return result.join('');
};
