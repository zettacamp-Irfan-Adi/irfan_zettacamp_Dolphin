/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/
function hasUniqueCharacters(str) { 
    for (let i = 0; i < str.length-1; i++) {
        let char = str[i];
        for (let j = i+1; j < str.length; j++) {
            let char2=str[j];
           if (char===char2) {
               return(false);
                }
           } 
   }
   return(true);
}

console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false