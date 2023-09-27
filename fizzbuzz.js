//write a program to print the screen numbers 1 to n. For multiples of 3, print 'fizz'. For multiple of 5, print 'buzz'. For multiple for 3 & 5 print 'fizzbuzz'.

function fizzBuzz(n) {

  //loop through 'n' input, then check if its fizz, buzz, or fizzbuzz.
  for (let i = 1; i <= n; i++) {

    //example... '15' % '3' = '5' * '3' = '15'. so '15' is fizzbuzz.
    //example... '15' % '5' = '3' * '5' = '15'. so '15' is fizzbuzz.
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");

    //example... '3' % '3' = '1' * '3' = '3'. so '3' is fizz.
    } else if (i % 3 === 0) {
      console.log("Fizz");

    //example... '5' % '5' = '1' * '5' = '5'. so '5' is buzz.
    } else if (i % 5 === 0) {
      console.log("Buzz");

    //display the 'n' input...
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15) //call the function and input some data.

