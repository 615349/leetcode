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
所以题目的意思是，从上面的某一行重排到期下一行，如果已经是最后一行了，则重排成第一行。

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

然而最后一步将后面的8 7 4 1做一个reverse。
reverse的时候，从0到中点就可以
0 <--> len - 1
1 <--> len - 1 - 1
2 <--> len - 1 - 2
...
n <--> len - 1 - n

如果所有的数字都是递减的，那么直接做一个reverse



var nextPermutation = function (nums) {

    if (nums.length < 2) return;
    var peak = nums.length - 1;
    for (var i = peak - 1; nums[i] >= nums[peak]; peak = i--);

    if (peak !== 0) {
        var swapIndex = findSwap(nums, peak, nums.length - 1, peak - 1);
        if (swapIndex !== -1) {
            swap(nums, peak - 1, swapIndex);
        }
    }

    reverse(nums, peak, nums.length - 1);

};

function findSwap(nums, s, e, target) {
    for (var i = e; i >= s; i--) {
        if (nums[i] > nums[target]) return i;
    }
    return -1;
}

function swap(nums, s, e) {    
    nums[s] = nums[s] ^ nums[e];
    nums[e] = nums[s] ^ nums[e];
    nums[s] = nums[s] ^ nums[e];
}
function reverse(nums, s, e) {
    for (var i = 0; i < Math.ceil((e - s ) / 2); i++) {
        swap(nums, s + i, e - i);
    }
}




