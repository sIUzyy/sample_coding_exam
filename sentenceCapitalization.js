function upperCase(str){
    
    // convert to lowercase, conver to array, map each letter, get the first element and uppercase it, get the rest of the word then join together.
    const newStr = str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    
    return newStr
}

const res = upperCase("hello world") // Hello World
