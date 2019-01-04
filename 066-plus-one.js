Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [9]
Output: [1,0]
Explanation: The array represents the integer 10.

不能以下步骤：
1, use Array.join('');
2, use Number()
3, +1
4, convert back to array by Array.from()
because it may exceed the largest number

采用的方法很简单，从后往前循环。设置一个carrier为0，如果result[i]等于10（个位数加1不可能超过10），那么carrier为1，否则为0。result[i]则mod 10

最后可能结束循环的carrier为1，要记得在最高位加1

var plusOne = function(digits) {    
    const n = digits.length;
    
    const result = [...digits];
    ++result[n - 1];
    let carrier = 0;
    for(let i = n - 1; i >=0; i--) {
        result[i] += carrier;
        carrier = Math.floor(result[i]/10);
        result[i] %= 10;
    }
    
    carrier === 1 && result.unshift(1);    
    return Array.from(result);
};
