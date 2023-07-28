function removeElement(nums: number[], val: number): number {
    let k = 0; // Pointer to keep track of the number of elements not equal to val
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
  }
  
  // Test cases
  const nums1: number[] = [3, 2, 2, 3];
  const val1: number = 3;
  const k1: number = removeElement(nums1, val1);
  console.log(`Output: ${k1}, nums = [${nums1}]`); // Output: 2, nums = [2, 2, _, _]
  
  const nums2: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
  const val2: number = 2;
  const k2: number = removeElement(nums2, val2);
  console.log(`Output: ${k2}, nums = [${nums2}]`); // Output: 5, nums = [0, 1, 4, 0, 3, _, _, _]
  