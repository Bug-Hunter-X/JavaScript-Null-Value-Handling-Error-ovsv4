function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values by returning 0 or another appropriate default value
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; //Handle non-numeric input
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo('a', 1)); // Output: NaN