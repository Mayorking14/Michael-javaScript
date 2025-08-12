function calculate(value1, value2){

const prompt = require('prompt-sync')();
let sign = prompt("Enter operator: ")

if(sign == "-"){

let answer = value1 - value2
return answer
}
else if(sign == "+"){

let answer1 = value1 
answer1 += value2
return answer1
}

}

const prompt = require('prompt-sync')();

let number1 = prompt("Enter number: ")
let number2 = prompt("Enter second number: ")
console.log(calculate(number1, number2))
