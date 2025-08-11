function checkPassword(password2){
const password = "secret123"
if(password2 == password){

console.log("Access granted! Welcome!")
}
	else {
		
console.log("Access denied!")

}

}


const prompt = require('prompt-sync')();

let password = prompt("Enter password:> ")

console.log(checkPassword(password))
