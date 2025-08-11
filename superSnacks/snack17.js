function checkTemperature(temperature){

if(temperature > 30){
console.log("Hot!")
}
else if(temperature <= 30){
console.log("Cold!")
}
return temperature
}


const prompt = require('prompt-sync')();

let temperature = prompt("Enter temperature:> ")
console.log(checkTemperature(temperature))