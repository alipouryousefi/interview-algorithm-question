function merge(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1 array
    let j = n - 1; // Pointer for nums2 array
    let k = m + n - 1; // Pointer for the merged array (nums1)
  
    // Merge nums1 and nums2 from the end
    while (i >= 0 && j >= 0) {
      if (nums1[i] >= nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    // If there are remaining elements in nums2, add them to nums1
    while (j >= 0) {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  
  // Example usage:
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  
  merge(nums1, m, nums2, n);
  console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
  