function incrementLargeInteger(digits) {
    let carry = 1;
  
    for (let i = digits.length - 1; i >= 0; i--) {
      const sum = digits[i] + carry;
      digits[i] = sum % 10;
      carry = Math.floor(sum / 10);
  
      if (carry === 0) {
        // No carry left, we can stop the loop
        break;
      }
    }
  
    if (carry !== 0) {
      // If there's a carry left after the loop, add it as a new digit at the beginning
      digits.unshift(carry);
    }
  
    return digits;
  }
  
  // Test cases
  console.log(incrementLargeInteger([1, 2, 3])); // Output: [1, 2, 4]
  console.log(incrementLargeInteger([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
  console.log(incrementLargeInteger([9])); // Output: [1, 0]
  