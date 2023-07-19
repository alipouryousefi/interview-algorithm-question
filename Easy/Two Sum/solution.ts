function twoSum(nums: number[], target: number): number[] {
    const numToIndexMap: { [key: number]: number } = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (complement in numToIndexMap) {
        return [numToIndexMap[complement], i];
      }
  
      numToIndexMap[nums[i]] = i;
    }
  
    // If no solution is found, return an empty array
    return [];
  }
  
  // Test cases
  console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
  console.log(twoSum([3, 3], 6)); // Output: [0, 1]