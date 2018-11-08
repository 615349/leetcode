Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    
    let isPositive = false;
    const max = ~(1 << 31);
    const min = 1 << 31;
    
    if (dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0) {
        isPositive = true;
    }
    
    if (isPositive) {
        const ans = Math.floor(dividend/divisor);
        return Math.min(ans, max);
    } else {
        const ans = Math.ceil(dividend/divisor);
        return Math.max(ans, min);
    }
};
