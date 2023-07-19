function isValid(s: string): boolean {
    const stack: string[] = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs: { [key: string]: string } = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const correspondingOpeningBracket = bracketPairs[char];
        const lastOpeningBracket = stack.pop();
  
        if (correspondingOpeningBracket !== lastOpeningBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Test cases
  console.log(isValid("()")); // Output: true
  console.log(isValid("()[]{}")); // Output: true
  console.log(isValid("(]")); // Output: false