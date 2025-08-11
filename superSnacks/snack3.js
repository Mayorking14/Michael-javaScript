function guessNumber(favoriteNumber){

if(favoriteNumber == 7){

console.log("That’s my favorite number!")
}
	else {
console.log("Nice try, guess again!")
		
}
return favoriteNumber
}

const prompt = require('prompt-sync')();

let favoriteNumber = prompt("Enter number:> ")

console.log(guessNumber(favoriteNumber))
