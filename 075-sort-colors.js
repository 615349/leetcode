Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?

one-pass: 循环一次
two-pass: 循环两次

一个cheat way是
var sortColors = function(nums) {
   return nums.sort((a, b) => a - b)
};

这个也通过了，但是面试估计不行

设立两个变量，一个是whiteId， 另一个是blueId，分别是white和blue的起始点
初始值分别设为0和m-1

再设定两个指针，i和j，分别指向开头和结尾
循环数组，如果为0，那么交换i和whiteId。
这里需要注意，由于使用了bit操作，当两个index相等的时候会变成0
比如
nums = [2]
start = 0
end = 0
交换之后变成了[0]

同样的，如果是2，交换i和blueId

如果是1，则i++


const swap = (nums, start, end) => {
    nums[start] = nums[start] ^ nums[end];
    nums[end] = nums[start] ^ nums[end];
    nums[start] = nums[start] ^ nums[end];
};

var sortColors = function(nums) {
    if (!nums || nums.length === 0) {
        return nums;
    }

    const m = nums.length;

    let whiteId = 0;
    let blueId = m - 1;

    let i = 0;
    let j = m - 1;
    while(i <= j) {
        if (nums[i] === 0) {
            i !== whiteId && swap(nums, i, whiteId);
            i++;
            whiteId++;
        } else if (nums[i] === 2) {
            i !== blueId && swap(nums, i, blueId);
            blueId--;
            j--;
        } else {
            i++;
        }
    }
    return nums;
};



