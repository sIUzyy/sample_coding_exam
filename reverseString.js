// 1. turn the string into array
// 2. reverse it using 'reverse' function in javascript
// 3. back to string

//first appproach 
function reverse (string) {
    //first we split the string into an array, then reverse it using js function, after that we join them together.
    return string.split('').reverse().join('')
}
const output = reverse('hello') //called the function and pass down 'hello' value in parameter
console.log(output) //display the output


// 1.initialized reversed
// 2.loop through string

//second approach
function reverse (string) {
    let reversed = '' //this is where the reverse string stored.
    for(let c of string){ //'c' will represent the 'string' parameter.
        reversed = c + reversed //each iteration the value of reversed will change. 'olleh'
    }
    console.log(reversed) //display the output
}

reverse('hello') //called the function and pass down 'hello' value in parameter
