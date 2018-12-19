/* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

使用dp的方法
举个例子，如果数组是
[0, 1, 0, 2, 1, 0, 1, 3, 0]

                     *
         *           * 
   *     *  *     *  *  
0  1  2  3  4  5  6  7  8
首先，计算一个left数组，该数组的每个元素是该坐标的左边最高的数
对应于上述的情况，就应该是
const left = 
[0, 0, 1, 1, 2, 2, 2, 2, 3]

同样的，还需要计算一个right数组，该数组的每个元素是该坐标右边最大的数
const right = 
[3, 3, 3, 3, 3, 3, 3, 0, 0]

接下里的计算就变得很简单了。总的储水量是每个坐标的储水量之和。
单个坐标的储水量是min(left[i], right[i]) - height[i]
也就是根据木桶原理，需要左边和右边的较小值，然后减去该坐标本身的高度

const trap = (height) => {
    if (!height || height.length < 3) return 0;

    const { length } = height;

    let left = [];
    let right = [];
    left[0] = 0;
    right[length - 1] = 0;

    for(let i = 1; i < length; i++) {
        left[i] = Math.max(left[i - 1], height[i - 1]);
    }

    for(let j = length - 2; j >= 0; j++) {
        right[j] = Math.max(right[j + 1], height[j + 1]);
    }

    let result = 0;
    let min;

    for(let k = 0; k < length; k++) {
        min = Math.min(left[k], right[k]);
        result += Math.max(min - height[k], 0);
    }

    return result;
}

但是这个算法在leetcode的网站上通不过，原因是空间超过了

实际上用同一个数组就可以了
const trap = (height) => {
    if (!height || height.length < 3) return 0;
    
    let result = 0;
    const { length } = height;
    
    const dp = new Array(length).fill(0);
    
    for(let i = 1; i < length; i++) {
        dp[i] = Math.max(dp[i - 1], height[i - 1]);
    }
    
    let right = 0;
    for(let j = length - 2; j >= 0; j--) {
        right = Math.max(right, height[j + 1]);
        dp[j + 1] = Math.min(dp[j + 1], right);
        if (dp[j + 1] - height[j + 1] > 0) 
            result += dp[j + 1] - height[j + 1];
    }
    
    return result;
}



