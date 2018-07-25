/**
 * https://leetcode.com/problems/reverse-integer/description/
 * Difficulty:Easy
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output:  321
 * Example 2:
 * Input: -123
 * Output: -321
 * Example 3:
 * Input: 120
 * Output: 21
 * Note:
 * Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */

首先弄一个flag，如果是负数，最后要乘以-1
如果是负数，要先化成正数来做
接下来的就简单来

const reverse = (x) => {  
  //the requirement assumes return 0 when integer overflows
  const MAX = ~(1 << 31);
  const MIN = 1 << 31;
    
  if (x > MAX || x < MIN) return 0;
    
  let flag = 1;
  if (x < 0) {
      flag = -1;
      x = -x;
  }
    
  let result = 0;
  while (x) {
      result = result * 10 + x % 10;
      x = Math.floor(x/10);
  }
    
  result = flag * result;  
    
  return result;
}
