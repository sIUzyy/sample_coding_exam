//chunked array
//write a function 'chunk(arr,n)', that returns chunked array of size n at the least.

// example:
// given: [1,4,12,3,2,6,-9,0], n = 3. return: [[1,4,12],[3,2,6],[-9,0]].


// procedure
// 1. create an array called "chunked" = []
// 2. get the last chunked array within last "chunked"
// 3. check if the last exist OR size last equals to n. If it does exist, then push into "chunked". Else, push into "last".
// 4. return "chunked"

function chunk (arr, n) {

    //create an array called "chunked" = []
    const chunked = []

    //iterate through each element 'elem' in the input array 'arr'. '[1,4,12,3,2,6,-9,0]' will iterate here.
    for(let elem of arr){

    //get the last chunked array within last "chunked". chunked.length gives the total number of elements.
    let last = chunked[chunked.length - 1] // By subtracting 1 from the length, we are effectively getting the index of the last element in the array.

    //check if the last exist OR size last equals to n
    if(!last || last.length === n)
      //If it does exist, then push into "chunked"
      chunked.push([elem]) //create new array with a single element. Then, adds this newly created array as an element to the chunked array
    else
      //Else, push into "last".
      // In simpler terms, if last is, for example, the subarray [1, 2, 3], and elem is the number '4', 
      // then last.push(elem) would modify last to become [1, 2, 3, 4]. 
      // It adds 4 to the end of the subarray.
      last.push(elem)

    }
   
    // return "chunked"
    return chunked

}

console.log(chunk([1,4,12,3,2,6,-9,0], 4))