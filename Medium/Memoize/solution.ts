type FunctionWithArgs<T> = (...args: any[]) => T;

function memoize<T>(fn: FunctionWithArgs<T>): FunctionWithArgs<T> {
  const cache: { [key: string]: T } = {};
  return function (...args: any[]): T {
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
const sum = (a: number, b: number): number => a + b;
const fib = (n: number): number => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

// Memoized versions of functions
const memoizedSum: FunctionWithArgs<number> = memoize(sum);
const memoizedFib: FunctionWithArgs<number> = memoize(fib);
const memoizedFactorial: FunctionWithArgs<number> = memoize(factorial);

// Example usage:
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(1, 2)); // Output: 3

console.log(memoizedFactorial(2)); // Output: 2
console.log(memoizedFactorial(3)); // Output: 6
console.log(memoizedFactorial(2)); // Output: 2
