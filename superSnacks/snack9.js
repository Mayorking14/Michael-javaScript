function controlTraffic(symbol){

if(symbol == "red"){
	console.log("Stop")
}
if(symbol == "yellow"){
	console.log("Wait")	
}
if(symbol == "green"){
	console.log("Go")
}

}

const prompt = require('prompt-sync')();

let trafficLight = prompt("input color:> ")

console.log(controlTraffic(trafficLight))
