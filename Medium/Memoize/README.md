Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

    sum accepts two integers a and b and returns a + b.
    fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
    factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

 

Example 1:

Input<br/>
"sum"<br/>
["call","call","getCallCount","call","getCallCount"]<br/>
[[2,2],[2,2],[],[1,2],[]]<br/>
Output<br/>
[4,4,1,3,2]<br/>

Explanation<br/>
const sum = (a, b) => a + b;<br/>
const memoizedSum = memoize(sum);<br/>
memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.<br/>
memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.<br/>
// Total call count: 1<br/>
memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.<br/>
// Total call count: 2<br/>

Example 2:

Input<br/>
"factorial"<br/>
["call","call","call","getCallCount","call","getCallCount"]<br/>
[[2],[3],[2],[],[3],[]]<br/>
Output<br/>
[2,6,2,2,6,2]<br/>

Explanation<br/>
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));<br/>
const memoFactorial = memoize(factorial);<br/>
memoFactorial(2); // Returns 2.<br/>
memoFactorial(3); // Returns 6.<br/>
memoFactorial(2); // Returns 2. However factorial was not called because 2 was seen before.<br/>
// Total call count: 2<br/>
memoFactorial(3); // Returns 6. However factorial was not called because 3 was seen before.<br/>
// Total call count: 2<br/>

Example 3:

Input<br/>
"fib"<br/>
["call","getCallCount"]<br/>
[[5],[]]<br/>
Output<br/>
[8,1]

Explanation<br/>
fib(5) = 8<br/>
// Total call count: 1

