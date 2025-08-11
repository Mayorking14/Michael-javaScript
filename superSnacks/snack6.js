function getMultiplesOf3(numbers){
let multiples = []

for(let count = 1; count <= 15; count++){

if(count % 3 == 0){

multiples.push(count)
}

}
return multiples
}


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(getMultiplesOf3(number)) 