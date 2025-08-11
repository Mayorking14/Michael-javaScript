function choosePet(pet){

if (pet === "dogs" || pet === "cats"){
	console.log("Woof! Dogs are awesome!")
}
	else{
		console.log("Cool choice, but i love dogs!")


}
return pet
}

const prompt = require('prompt-sync')();

let favoritePet = prompt("Enter pet name:> ")

console.log(choosePet(favoritePet))