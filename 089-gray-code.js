The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

Example 1:

Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1
Example 2:

Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0].


本来想用dfs做的，发现不是很好做。那么来找找规律
如果n = 3
0 0 0
0 0 1
0 1 1
0 1 0
1 1 0
...

发现的规律就是，比如第三行，就是1 << 1, 然后把result[1] + tmp, result[0] + tmp

接着看第5行，
就是tmp = 1 << 2, 然后从大到小，把result之前的值都加起来，每次都push

下面循环中的i表示第几位的最高值是1

var grayCode = function(n) {
    const result = []
    if (n < 0) {
        return result;
    }
    result.push(0);
    if (n === 0) {
        return result
    }
    result.push(1);
    if (n === 1) {
        return result;
    }  
        
    for(let i = 1; i < n; i++) {
        let tmp = 1 << i;
        for(let j = Math.pow(2, i) -1; j >=0 ; j--) {
            result.push(tmp + result[j]);
        }
    }
    
    return result;
};
