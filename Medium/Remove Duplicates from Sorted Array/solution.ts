function removeDuplicates(nums: number[]): number {
    // Edge case: If the array has less than or equal to 2 elements, no duplicates to remove
    if (nums.length <= 2) {
      return nums.length;
    }
  
    // Initialize pointers
    let k: number = 2; // Pointer to keep track of the next unique element position
    let prev: number = 1; // Pointer to keep track of the previous element
    let curr: number = 2; // Pointer to keep track of the current element
  
    while (curr < nums.length) {
      // Check if the current element is a duplicate
      if (nums[curr] === nums[prev] && nums[curr] === nums[prev - 1]) {
        curr++;
      } else {
        // If it's not a duplicate, move the unique element to its correct position
        nums[k] = nums[curr];
        k++;
        prev++;
        curr++;
      }
    }
  
    return k;
  }
  
  // Test cases
  const nums1: number[] = [1, 1, 1, 2, 2, 3];
  console.log(removeDuplicates(nums1)); // Output: 5, nums = [1, 1, 2, 2, 3, _]
  
  const nums2: number[] = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  console.log(removeDuplicates(nums2)); // Output: 7, nums = [0, 0, 1, 1, 2, 3, 3, _, _]
  