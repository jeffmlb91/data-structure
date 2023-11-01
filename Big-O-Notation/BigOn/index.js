{/**
O(n) Here we are passing n in the function and this 
operation will run n times
meaning if n = 5, the equation runs 5 times. If n = 10, it runs 10 times
*/}

function logItems(n) {
    for(let i = 0; i < n; i++ ) {
        console.log(i);
    }
}
// logItems(10);

let arrayOfNumbers = [1,2,3,4,5,6];

function increaseNum() {
    for(let i=0; i < arrayOfNumbers.length; i++) {
        console.log("This is ", i)
    }
}
// increaseNum()
