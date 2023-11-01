// console.log("Nodemon is running");

// BIG O Worst case senerio
// OMEGA Best case senario
// AVERAGE case Omocron or O

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

{/**
First Rule: DROP CONSTANTS
O(n) Drop Constants. 
In the following the first forloop operation is 0(n) and the second is O(n)
The function logItems2 has 2 operations n + n = O(2n) which equals O(n)
we dropped the constant
*/}
function logItems2(n) {
    for (let i = 0; i < n; i ++) {
        console.log("first operation", i)
    }
    for ( let j = 0; j < n; j ++ ) {
        console.log("second operation", j)
    }
}
// logItems2(3)

{/**
 O(n^2) completes operations twice as slow than the O(n)
 In the following, we will add a for loop to the first for loop.
 Each operation of the first for each interation for the first for loop will be applied 

 Therefore n * n = n^2 which equals O(n^2)
*/}

function logItems3(n) {
    for ( let i = 0; i < n; i++) {
        for( let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}
logItems3(10)
