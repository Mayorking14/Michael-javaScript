function countVowels(word){

let vowel = 0
for(let count = 1; count <= word.length; count++){

if(word[count] === "a" || word[count] === "e" || word[count] === "i" || word[count] === "o" || word[count] === "u"){

vowel++
console.log(vowel)
}

}

}


const prompt = require('prompt-sync')();

let word = prompt("Enter Word: ")
console.log(countVowels(word))