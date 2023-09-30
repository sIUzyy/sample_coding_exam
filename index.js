// implement an algorithm to determine if a string has all unique characters.
// procedure...
// take a string
// initialize an obj
// loop through string, check if obj does not exist, if not set 'obj' to 1. Otherwise, increment 'obj'
// loop through object, if object is greater than '1' return 'false'. Otherwise, return 'true'.

// take a string
function IsUnique (str){

  // initialize an obj
  let obj = {}

  // loop through string
  for(let i of str)
    //if obj[i] does not exist, set it to 1. Else, increment it.
    // for visual this what happened during looping '{h: 1, e: 1, l: 2, o: 1}'
    !obj[i]? obj[i]=1 : obj[i]++

  // loop through object 'obj' to check if character is greater than '1'
  for(let i in obj){
    //if obj[i] > 1 return false, otherwise return true.
    //example: {h: 1, e: 1, l: 2, o: 1} 'l' is greater than '1' so it will return 'false'
    if(obj[i] > 1)
      return false
  }
  return true
}

console.log({
  IsUnique: IsUnique('hello') //called the function and pass some string.
})


// given: {h: 1, e: 1, l: 2, o: 1}
// output: false
//explanation: each character should not exceed to '1', if it exceed return 'false', otherwise return 'true'.