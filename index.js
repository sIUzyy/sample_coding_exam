//reverse string
function reverse (string) {
    return string.split('').reverse().join('')
}

const output = reverse('hello')



function reverse (string) {
    let reversed = ''

    for(let c of string){
        reversed = c + reversed
    }
    console.log(reversed)

}

reverse('hello')
