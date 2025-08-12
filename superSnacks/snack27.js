function isDivisible(number){

for(let count = 1; count <= 20; count++){
	number = count
if (number % 3 == 0 && number % 5 == 0){
console.log(number)
}

}

}


let number
console.log(isDivisible(number))