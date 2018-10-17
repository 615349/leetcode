/**
 *
 * https://leetcode.com/problems/search-for-a-range/description/
 * Difficulty:Medium
 *
 * Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

要求复杂度是o(logn)的一定是使用binary search 二分法
因为是已经排序好的递增数组，那么使用两次二分法，
第一次找到左边的区间，第二次找到右边的区间

class Solution {
public:
    vector<int> searchRange(int A[], int n, int target) {
       if(n == 0) {
            return vector<int>({-1, -1});
        }

        vector<int> v;
        int low = 0;
        int high = n - 1;
        //第一次二分找第一个位置
        while(low <= high) {
            int mid = low + (high - low) / 2;
            if(A[mid] >= target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        if(low < n && A[low] == target) {
            v.push_back(low);
        } else {
            return vector<int>({-1, -1});
        }

        low = low;
        high = n - 1;
        //从第一个位置开始进行第二次二分，找最后一个位置
        while(low <= high) {
            int mid = low + (high - low) / 2;
            if(A[mid] <= target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        v.push_back(high);
        return v;
    }
};
