// procedure
// 1. convert to String
// 2. turn into Array
// 3. reverse Method 
// 4. back to String
// 5. back to Int

function reverseInt(n) {
  if(n < 0) // if n is less than 0

  //then return 
  //-1* = convert from positive to negative number
  //toString = convert to string
  //split = turn into array
  //reverse = reverse the array
  //join = back to string
  //parseInt = convert to int
  return -1*parseInt(n.toString().split('').reverse().join(''))

  //else, 
  //toString = convert to string
  //split = turn into array
  //reverse = reverse the array
  //join = back to string
  //parseInt = convert to int
  return parseInt(n.toString().split('').reverse().join(''))
 
}

console.log({
  testcase1: reverseInt(51),
  testcase2: reverseInt(500),
  testcase3: reverseInt(-15),
  testcase4: reverseInt(-900),
})





