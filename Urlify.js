// Task: URLify algorithm
// write a method to replace all spaces in a string with "%20".

// create a function called 'Urlify'
// str = string
// n = size of string, ignoring ending white spaces.
function Urlify (str, n) {

  // this is where the result store.
  // initialized a variable to store the data.
  let newStr = ''

    // loop thru string
    for(let i = 0; i < n; i++){

      // if string of 'i' is equal to empty space.
      if(str[i] === ' '){
        // concatenate the newStr with '%20'
      newStr += '%20'
      } else {
        // else, the newStr become the regular str.
        newStr += str[i]
      }
    }

   // display the newStr variable.
   console.log(newStr)

}

// called the Urlify function and pass some data.
Urlify('Mr John Smith', 13)

