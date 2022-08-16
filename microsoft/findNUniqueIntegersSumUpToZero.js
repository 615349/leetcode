Given an integer n, return any array containing n unique integers such that they add up to 0.

 

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]

这题比较简单了，任何符合要求的都可以
那么可以这样考虑，如果是奇数, 先加入0，然后沿着x轴延伸。输出[-3, -2, -1, 0, 1, 2, 3]
如果是偶数，忽略0，沿着x轴延伸。输出[-3, -2, -1, 1, 2, 3]

var sumZero = function(n) {
    const isOdd = n % 2 === 1;
    const result = [];
    let m = n;
    if (isOdd) {
        result.push(0);
        --m;
    }
    
    const halfLength = m / 2;
    
    for (let i = 1; i <= halfLength; i++) {
        result.push(i)
        result.push(-i);
    }
    
    return result;
};
