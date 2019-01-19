Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,1,2,3,3],

Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond the returned length.

跟026差不多，但是这题允许有两个重复数字
因为已经是排序的，所以可以设置一个count，看当前的nums[i]已经出现多少次了

当一个字符出现超过两次，做删除动作，并且回退一格

var removeDuplicates = function(nums) {
    if (!nums || nums.length <= 2) {
        return nums.length;
    }

    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
            if (count > 2) {
                nums.splice(i, 1);
                --i;
                --count;
            }
        } else {
            count = 1;
        }
    }
    
    return nums.length;
};
