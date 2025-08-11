function isEvenOrEven(numbers){

if(numbers % 2 == 0){
console.log('is even')
}
	else {

	console.log('is odd')
}
return numbers
}



const prompt = require('prompt-sync')();
let value = prompt("Enter number: > ")
console.log(isEvenOrEven(value))