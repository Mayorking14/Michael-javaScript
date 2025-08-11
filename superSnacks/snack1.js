function chooseGreeting(name){

if (name === "Alex"){ 
console.log("Hello, friend!")

} else {
	
	console.log("Hi,stranger!") 
}
return name
}

 


const prompt = require('prompt-sync')();

let name = prompt("Enter name: ");

console.log(chooseGreeting(name))
