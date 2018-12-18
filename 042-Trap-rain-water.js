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

public class Solution {
    /**
     * @param heights: an array of integers
     * @return: a integer
     */
    public int trapRainWater(int[] heights) {
        if (heights == null || heights.length < 3) {
            return 0;
        }
        int length = heights.length;

        int[] left = new int[length];
        int[] right = new int[length];

        int trapped = 0;

        // For heights[0] or heights[length - 1], the max left/right height is 0
        left[0] = 0;
        right[length - 1] = 0;

        // Keep track of the max height on the left of height[i]
        for (int i = 1; i < length; i++) {
            left[i] = Math.max(left[i - 1], heights[i - 1]);
        }

        // Keep track of the max height on the right of height[i]
        for (int j = length - 2; j >= 0; j--) {
            right[j] = Math.max(right[j + 1], heights[j + 1]);
        }

        // Calculate the total trapped water
        for (int k = 0; k < length; k++) {
            trapped += Math.max(Math.min(left[k], right[k]) - heights[k], 0);
        }

        return trapped;
    }
}


