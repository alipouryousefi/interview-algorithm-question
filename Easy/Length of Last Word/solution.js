function lengthOfLastWord(s) {
    // Trim the leading and trailing whitespaces from the string
    const trimmedString = s.trim();
  
    // Split the string into an array of words
    const wordsArray = trimmedString.split(" ");
  
    // Return the length of the last word
    return wordsArray[wordsArray.length - 1].length;
  }
  
  // Test cases
  console.log(lengthOfLastWord("Hello World")); // Output: 5
  console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
  console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
  