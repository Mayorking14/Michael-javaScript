function createTriangle(triangle){

let starsCount = 1


for (let line = 1; line <= 5; line++) {
    let stars = ""
    	for (let star = 0; star < starsCount; star++) {
        stars += "*"
}
console.log(stars)

starsCount++; 
}

}

let triangle
console.log(createTriangle(triangle))
