// console.log("Nodemon is running");

// BIG O Worst case senerio
// OMEGA Best case senario
// AVERAGE case Omocron or O

function logItems(n) {
    for(let i = 0; i < n; i++ ) {
        console.log(1);
    }
}
// logItems(10);

let arrayOfNumbers = [1,2,3,4,5,6];

function increaseNum() {
    for(let i=0; i < arrayOfNumbers.length; i++) {
        console.log("This is ", i)
    }
}
increaseNum()
