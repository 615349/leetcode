Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Input: dividend = 10, divisor = 3
Output: 3

Input: dividend = 7, divisor = -3
Output: -2

Notes:
1, both dividend and divisor will be 32-bit signed integers
2, The divisor will never be 0.
3, Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

我们设想87 / 4，本来应该的得到21余3，那么如果我们把87忽略余数后分解一下，
87 = 4 * 21 = 4 * 16 + 4 * 4 + 4 * 1，
也就是87 = 4 * (1 * 2^4 + 0 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0)，
也就是把商分解为21 = 1 * 2^4 + 0 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0，所以商的二进制是10101。
我们可以不断的将4乘2的一次方，二次方，等等，直到找到最大那个次方，在这里是2的四次方。然后，我们就从四次方到零次方，按位看商的这一位该是0还是1。

public class Solution {
    public int divide(int dividend, int divisor) {
        if(dividend == Integer.MIN_VALUE && (divisor == 1 || divisor == -1)){
            return divisor == 1 ? Integer.MIN_VALUE : Integer.MAX_VALUE;
        }
        return (int)divideLong(dividend, divisor);
    }
    
    public long divideLong(long dd, long dv){
        boolean isPos = (dd > 0 && dv > 0) || (dd < 0 && dv < 0); 
        dd = Math.abs(dd);
        dv = Math.abs(dv);
        int digits = 0;
        // 通过将除数乘2，乘4，乘8，一直乘下去，找到商的最高的次方
        // 比如87/4=21，商的最高次方是4，即2^4=16，即4 * 16 < 87
        while(dv <= dd){
            dv <<= 1;
            digits++;
        }
        // 重置除数，把最高次方减1得到实际最高位，刚才循环中多加了一次
        dv >>= digits;
        digits--;

		long res = 0;
        // 看商的每一位是否应该为1
        while(digits >= 0){
            if(dd >= (dv << digits)){
                dd -= dv << digits;
                res += 1 << digits;
            }
            digits--;
        }
        return isPos ? res : - res;
    }
}
