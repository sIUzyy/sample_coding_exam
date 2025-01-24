// The arraySum function takes an array as input and calculates the total sum of all the numbers in that array. If the array contains other arrays inside it (nested arrays), it will also add up the numbers in those nested arrays.

// notes: In short, recursion is when a function calls itself to solve smaller versions of the same problem until it reaches a point where it can stop (called the base case). a function keeps calling itself until the problem is fully solved.

function arraySum(arr){
    let sum = 0 
    
    for(let s of arr){
        if(Array.isArray(s)){
            sum += arraySum(s)
        } else if(typeof s === "number"){
            sum += s
        } else {
            return 0
        }
    }
    
    return sum
}

const res = arraySum([1,2,3,4,5])
const res1 = arraySum([])

console.log(res)
console.log(res1)
