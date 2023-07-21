function letterCombinations(digits) {
    if (digits.length === 0) {
      return [];
    }
  
    const letterMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
  
    const combinations = [];
  
    function generateCombinations(index, currentCombination) {
      if (index === digits.length) {
        combinations.push(currentCombination);
        return;
      }
  
      const digit = digits[index];
      const letters = letterMap[digit];
  
      for (const letter of letters) {
        generateCombinations(index + 1, currentCombination + letter);
      }
    }
  
    generateCombinations(0, '');
  
    return combinations;
  }
  
  // Example usage:
  console.log(letterCombinations('23')); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
  console.log(letterCombinations('')); // Output: []
  console.log(letterCombinations('2')); // Output: ["a","b","c"]
  