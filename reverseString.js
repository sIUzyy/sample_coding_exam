// === METHOD: 01 ===
// PROCEDURES: CONVERT TO ARRAY, REVERSE, BACK TO STRING.
function reverseString(str) {
  // split into array, reverse it, then join it back to string again.
  return str.split("").reverse().join("");
}

// === METHOD: 02 ===
// PROCEDURES: INITIALIZE A VARIABLE, LOOP THROUGH STRING, RETURN THE INITIALIZE VARIABLE.
function reverseStr(str) {
  let reversed = ""; // it will represent the reversed string.

  for (const c of str) {  // for loop through every single character of str.
    
    reversed = c + reversed; // update the reversed variable, backwards append. 
  }

  return reversed; // return the reversed string. (e.g. cat = t + a + c)
}

// === METHOD: 03 ===
// PROCEDURE: CONVERT TO ARRAY, USED REDUCE METHOD, INITIAL VALUE IS "".
function reversedStr(str) {
    
  // convert to array - Array.from allow us to pass in an iterable object like the split("").
  // reduce method will take an array of item then reduce it down to single result
  // and the initial value or stating value is ""
  return Array.from(str).reduce((reversed, c) => c + reversed, ""); // cat = t + a + c
}
