const isValid= (s) =>{
    const stack = [];
  
    // Define the mapping of opening and closing brackets
    const bracketMapping = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    for (let char of s) {
      if (char in bracketMapping) {
        // If the character is an opening bracket, push it onto the stack
        stack.push(char);
      } else {
        // If the character is a closing bracket, check if it matches the corresponding opening bracket
        const lastOpeningBracket = stack.pop();
        if (bracketMapping[lastOpeningBracket] !== char) {
          return false; // Invalid bracket sequence
        }
      }
    }
  
    return stack.length === 0; // Check if the stack is empty (all brackets closed properly)
  }
  
  // Test cases
  console.log(isValid("()")); // Output: true
  console.log(isValid("()[]{}")); // Output: true
  console.log(isValid("(]")); // Output: false
  console.log(isValid("([)]")); // Output: false
  console.log(isValid("{[]}")); // Output: true