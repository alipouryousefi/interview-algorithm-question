interface RomanMapping {
    value: number;
    symbol: string;
  }
  
  function intToRoman(num: number): string {
    const romanMap: RomanMapping[] = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' },
    ];
  
    let result = '';
    let remaining = num;
  
    for (const { value, symbol } of romanMap) {
      while (remaining >= value) {
        result += symbol;
        remaining -= value;
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(intToRoman(3)); // Output: "III"
  console.log(intToRoman(58)); // Output: "LVIII"
  console.log(intToRoman(1994)); // Output: "MCMXCIV"
  