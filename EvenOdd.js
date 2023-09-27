function OddEven (n) {

  //divide the 'n' to '2'. If theres no remainder meaning its 'even'. Otherwise, 'odd'.
  if(n % 2 === 0 ){
    return 'even'
  }
  return 'odd'
}

console.log(OddEven(0))
