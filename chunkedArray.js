//chunked array
//write a function 'chunk(arr,n)', that returns chunked array of size n at the least.

// example:
// given: [1,4,12,3,2,6,-9,0], n = 3. return: [[1,4,12],[3,2,6],[-9,0]].


// procedure
// 1. create an array called "chunked" = []
// 2. get the last chunked array within last "chunked"
// 3. check if the last exist OR size last equals to n. If it does exist, then push into "chunked". Else, push into "last".
// 4. return "chunked"

function chunk (array, size) {
    // empty array
    const chunked = []
    
    // idx
    let index = 0
    
    // if index is less than to length of array
    while(index < array.length) {
        // slice the array from index to index + size
        const chunk = array.slice(index, index + size)
        
        // push the chunk to empty array chunked
        chunked.push(chunk)
        
        // update the index with new value
        index += size
    }
    
    return chunked
}

const result = chunk([1,2,3,4,5,6,7,8], 3) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
console.log(result)
