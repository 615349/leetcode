Write a function that, given an array of N integers, returns the lagest integer K > 0 such that both values K and -K exist in array A. 
If there is no such integer, the function should return 0.

Example 1:
Input: [3, 2, -2, 5, -3]
Output: 3

Example 2:
Input: [1, 2, 3, -4]
Output: 0

首先进行sort，然后两个指针从左右两边开始。如果两边的数字加起来是0，那么右边的数肯定就是我们要的
或者也可以建立一个map，对每个数都判断map[-num[i]]

const largest = (array) => {
  array.sort((a, b) => a - b);
  
  let l = 0, r = array.length - 1;
  
  while(l < r) {
    const sum = array[l] + array[r];
    if (sum === 0) {
      return array[r];
    }
    if (sum > 0) {
      --r;
    }
    if (sum < 0) {
      ++l;
    }
  }
  return 0;
}

