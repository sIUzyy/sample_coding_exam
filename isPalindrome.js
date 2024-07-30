// 1. initialize a variable
// 2. turn into array
// 3. reverse it 
// 4. back to string

function isPalindrome (str){
    const pali = str.split('').reverse().join('') //reverse the string first
    return str === pali //check if the 'str' is equal to 'pali'. if yes return 'true' otherwise 'false'.
}
const output = isPalindrome('1991') //pass down some data in parameter
console.log(output) //display the output


// different approach 
// Define the function: Start by creating a function that takes a string as input.
// Normalize the string: Convert the string to a common case (e.g., lowercase) and remove any non-alphanumeric characters to make the palindrome check case-insensitive and ignore spaces or punctuation.
// Reverse the string: Create a reversed version of the normalized string.
// Compare the strings: Check if the normalized string is equal to its reversed version.
// Return the result: Return true if the strings are equal, otherwise return false.

function isPalindrome(str) {
    
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is equal to the reversed string
    return normalizedStr === reversedStr;
}

// Example usage
const output = isPalindrome('A man, a plan, a canal: Panama');
console.log(output); // true

