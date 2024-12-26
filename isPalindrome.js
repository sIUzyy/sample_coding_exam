// === METHOD: 01 ===
// PROCEDURES: INITIALIZE A VARIABLE, CONVERT TO ARRAY, REVERSE, BACK TO STRING.
//             CHECK IF STR IS EQUAL TO INITIALIZE VARIABLE

function isPalindrome(str) {
  // convert to array, reverse, and back to string.
  const newStr = str.split("").reverse().join("");

  // check if str is equal to initialize variable. if yes, return true. othwerise, false.
  return str === newStr;
}

// === METHOD: 02 ===
// PROCEDURES: INITIALIZE A VARIABLE. CONVERT TO LOWERCASE. REPLACE TO REMOVE ALL 'G' SPACE/PUNCTUATIONS/NON-ALPHANUMERIC.
//             REVERSE STRING THE INITIALIZE VARIABLE
//             CHECK IF INITIALIZE VARIABLE IS EQUAL TO REVERSE STRING.

function checkPalindrome(str) {
  // convert to lowercase. remove all 'g' non-alphanumeric characters. replance with ' '.
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // reverse the normalizedStr. convert to array. reverse. back to string.
  const reversedStr = normalizedStr.split("").reverse().join("");

  // check if normalizedStr is equal to reversedStr. if yes, return true. othwerise, false.
  return normalizedStr === reversedStr;
}
