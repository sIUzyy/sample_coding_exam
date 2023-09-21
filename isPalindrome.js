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
