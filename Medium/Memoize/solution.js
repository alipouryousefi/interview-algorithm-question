function memoize(fn) {
    const cache = {};
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  // Given functions
  const sum = (a, b) => a + b;
  const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
  
  // Memoized versions of functions
  const memoizedSum = memoize(sum);
  const memoizedFib = memoize(fib);
  const memoizedFactorial = memoize(factorial);
  
  // Example usage:
  console.log(memoizedSum(2, 2)); // Output: 4
  console.log(memoizedSum(2, 2)); // Output: 4
  console.log(memoizedSum(1, 2)); // Output: 3
  
  console.log(memoizedFactorial(2)); // Output: 2
  console.log(memoizedFactorial(3)); // Output: 6
  console.log(memoizedFactorial(2)); // Output: 2
  