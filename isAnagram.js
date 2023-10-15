// Task: Check Permutation.
// : Given two strings, write a method to decide if one is a permutation of the other.

// Procedure:
// 1. Check if both strings is equal to each other. If yes, return true.
// 2. Check the length of both strings. If !== return false.
// 3. Create an object of each one strings.
// 4. Check if the objects character count are equal



//initializes a variable for testing purposes.
const a = 'test' // {t: 2, e: 1, s: 1}
const b = 'estt' // {e: 1, s: 1, t: 2}
const c = 'diff' // {d: 1, i: 1, f: 2}


//create a function 
function isObj (str) {
  //initialize an object 'obj'.
  let obj = {}

  // the i will iterate in every input in 'str'
  for(let i of str)
    // check if 'i' of str does not exist. If yes, set it to '1'. Else, increment it.
    !obj[i] ? obj[i]=1 : obj[i]++
  return obj

}

//create a function that will take two strings.
function isAnagram(str1, str2){

  // check if str1 is equal to str2. If yes, return 'true'.
  if(str1 === str2)
    return true

  // check if the length of 'str1' is not equal to 'str2'.
  if(str1.length !== str2.length)
    return false
  else{

    // Create an object of each one strings.
    const obj1 = isObj(str1)
    const obj2 = isObj(str2)

    // Check if the objects character count are equal
    for(let i in obj1){

      //if 'obj1' is not equal to 'obj2' return false. They must be equal.
      if(obj1[i] !== obj2[i]){
        return false
      }
    }
  }

  return true
}


//display the output
console.log({
  isAnagram: isAnagram(a, b)
})

// example a, b ; output: true
// explanation: we have 2 't' in 'a' & 'b'. we have 1 'e' & 1 's'. even tho they in different position the set of numbers of character is equal to each other.

// example a, c ; output: false
// explanation: apart from they are different words, the character of each words is not equal to each other.
