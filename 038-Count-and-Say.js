/**
 * https://leetcode.com/problems/count-and-say/description/
 * Difficulty:Easy
 *
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 * 1 is read off as "one 1" or 11.
 *
 * 11 is read off as "two 1s" or 21.
 *
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n, generate the nth term of the count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a string.
 *
 * Example 1:
 * Input: 1
 * Output: "1"
 *
 * Example 2:
 * Input: 4
 * Output: "1211"
 */


解释一下就是，输入n，那么我就打出第n行的字符串。

怎么确定第n行字符串呢？他的这个是有规律的。

 n = 1时，打印一个1。

 n = 2时，看n=1那一行，念：1个1，所以打印：11。

 n = 3时，看n=2那一行，念：2个1，所以打印：21。

 n = 4时，看n=3那一行，念：一个2一个1，所以打印：1211。

以此类推。(注意这里n是从1开始的）

所以构建当前行的字符串要依据上一行的字符串。
      
      
使用的方法挺简单的，用递归函数。首先得到n - 1的结果，然后开始从头开始数
使用一个指针，以下面的例子，一开始指向0，然后用currentValue一位一位开始比较
      
    11121
    ^
    |
currentValue
      

然后指向下一个不同的数

    11121
       ^
       |
   currentValue
      
      
var countAndSay = function(n) {
    if (n <= 0) throw new Error('Incorrect argument');
    if (n === 1) return '1';
    
    const prevResult = countAndSay(n - 1);
    let count = 0;
    let currentValue = prevResult[0];
    let result = ''
    for(let i = 0; i < prevResult.length; i++) {
        if(currentValue === prevResult[i]) {
            count++;
        } else {
            result += '' + count + currentValue;
            currentValue = prevResult[i];
            count = 1;
        }
    }
   
    //consider 22221 or 22222 
    if (count > 0) {
        result += '' + count + currentValue;
    }
    return result;
};
