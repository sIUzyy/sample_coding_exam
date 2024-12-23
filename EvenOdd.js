function OddEven(n) {
  // if the remainder of n is equal to 0 return even otherwise odd.
  if (n % 2 === 0) return "even";
  return "odd";
}

// modulo return a remainder.
// 10 / 2 is 5 with remainder of 0.
// 11 / 2 is 5 with remainder of 5.
console.log(OddEven(10)); // even. 10 % 2 = 0, 0 === 0? true. return even.
console.log(OddEven(11)); // odd. 11 % 2 = 5, 5 === 0? false. return odd
