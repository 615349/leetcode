/**
 * https://leetcode.com/problems/next-permutation/description/
 * Difficulty:Medium
 *
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 * The replacement must be in-place, do not allocate extra memory.
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
如果是1，2，3排序
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1
所以题目的意思是，从上面的某一行得到下一行，如果已经是最后一行了，则得到第一行。

我们如果只想这个数变大一点点，应该尽可能的不去增加高位。
因为增加高位会带来更大的增益。
所以我们增加第n位的前提是，前n-1位已经达到了最大排列方法。

从右边开始，

比如这个数是
6 5 4 8 7 5 1

首先肯定从后面开始看，1和5调换了没有用。

7、5和1调换了也没有效果，因此而发现了8、7、5、1是递减的。

如果想要找到下一个排列，找到递增的位置是关键。

因为在这里才可以使其增长得更大。

于是找到了4，要找到比4大的最小的数，那就是5，将两者交换。

那么整个排列就成了：6 5 5 8 7 4 1

最后一步将后面的8 7 4 1做一个reverse。
reverse的时候，从0到中点就可以
0 <--> len - 1
1 <--> len - 1 - 1
2 <--> len - 1 - 2
...
n <--> len - 1 - n

如果所有的数字都是递减的，那么直接做一个reverse

var nextPermutation = function (nums) {

    if (nums.length < 2) return;
    let peak = nums.length - 1;
    // 从右到左的递增的最左边的数的index，也是8的index 3
    for (let i = peak - 1; nums[i] >= nums[peak]; peak = i--);

    // 如果peak是0，说明整个数组从右到左都是递增的，首尾互换
    // 如果peak不是0，说明peak-1是小于peak，peak-1与peak到length-1之间大于peak-1中最小的那个互换
    if (peak !== 0) {
        // 找到peak到length-1之间大于peak-1中最小的数
        const swapIndex = findSwap(nums, peak, nums.length - 1, peak - 1);
        swap(nums, peak - 1, swapIndex);
    }

    reverse(nums, peak, nums.length - 1);

};

function findSwap(nums, startIndex, endIndex, target) {
    for (let i = endIndex; i >= startIndex; i--) {
        if (nums[i] > nums[target]) return i;
    }
}

function swap(nums, startIndex, endIndex) {    
    nums[startIndex] = nums[startIndex] ^ nums[endIndex];
    nums[endIndex] = nums[startIndex] ^ nums[endIndex];
    nums[startIndex] = nums[startIndex] ^ nums[endIndex];
}
function reverse(nums, startIndex, endIndex) {
    while(startIndex < endIndex) {
        swap(nums, startIndex, endIndex);
        startIndex++;
        endIndex--;
    }
}
