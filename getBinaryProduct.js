// RIA ADVISORY - TECHNICAL EXAM

// PROBLEM: WRITE A PROGRAM THAT WILL GET THE PRODUCT OF ALL BINARY. THE PROGRAM SHOULD BE ABLE TO ACCEPT UNLIMITED BINARY AND CONVERT TO BINARY VALUE
// INPUT: ['101', '110', '1001']
// OUTPUT: 100001110

// PROCEDURE 1: CONVERT BINARY STRING TO DECIMAL
function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
  }
  return decimal;
}

// PROCEDURE 2: CONVERT DECIMAL TO BINARY STRING
function decimalToBinary(decimal) {
  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary === "" ? "0" : binary;
}

// PROCEDURE 3: CALCULATE THE PRODUCT OF BINARY NUMBERS
function getBinaryProduct(binaries) {
  let product = 1; // Start with 1 since it's a multiplication

  for (let binary of binaries) {
    let decimal = binaryToDecimal(binary.toString());
    product *= decimal;
  }

  return decimalToBinary(product);
}

// Example usage
const input = ["101", "110", "1001"];
const result = getBinaryProduct(input);
console.log(result); // Output: 100001110
