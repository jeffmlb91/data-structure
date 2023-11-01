{/*
    DROP NON DOMINANTS
    Here we are nesting a for loop and adding another for loop after the nested one
    The nested for loop has time complexity of O(n^2) and the second for loop is O(n)
    O(n^2 + n) which by dropping the none dominant (n) = O(n^2)
*/}

function logDropNonDominants(n) {
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < n; j++) {
            console.log("O-of-N-square", i, j)
        }
    }

    for (let k = 0; k < n; k++) {
        console.log("O-of-N", k)
    }
}

logDropNonDominants(10);