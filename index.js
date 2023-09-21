function maxChar (str) {
    let obj = {} //initializes an empty object, this is where the 'str' stored.
    
    for(let char of str){ // the char will iterate in every input in 'str'
      !obj[char] ? obj[char] = 1 :  obj[char] ++ // using ternary we check if the char of str does not exist in obj set obj[char] = 1. if it does, do an increment.
    }
    
    let maxNum = 0 //set to zero and track how many times it appears.
    let maxCharacter = '' //character that appear most of a time.
    
    for(let n in obj){ //the n will iterate over obj
        if(obj[n] >= maxNum){ // check if obj[char] is greater than or equal to maxNum
            maxNum = obj[n]
            maxCharacter = n
            
        }
        
    }
    
  console.log(obj) // display the 'obj'
  console.log(`${maxCharacter} appears ${maxNum} times`) // display the character that appear most of a time and display how many times it appears.
}

maxChar('hiiii') // called the function and pass some data in parameter.
