function calculateGrade(score){

if (score >= 90){
console.log("A!")
}
else if (score >= 80){
console.log("B!")
}
else if (score >= 70){
console.log("C!")
}
else{
console.log("F!")
}

}

const prompt = require('prompt-sync')();

let score = prompt("Enter Scores: ")
console.log(calculateGrade(score))
