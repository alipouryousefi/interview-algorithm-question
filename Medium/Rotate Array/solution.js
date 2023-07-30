/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // To handle the case when k is greater than the array length
    k = k % nums.length;

    const result = [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)]

    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i]
    }
};

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
rotate(nums1, k1);
console.log(nums1); // Output: [5, 6, 7, 1, 2, 3, 4]

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
rotate(nums2, k2);
console.log(nums2); // Output: [3, 99, -1, -100]