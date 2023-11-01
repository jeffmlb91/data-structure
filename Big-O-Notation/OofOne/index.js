{/** 
 O OF ONE ----> OR CONSTANT TIME ---> THE MOST EFFICIENT BIG O
 IN THE GRAPH IT IS A FLAR LINE ON THE X AXIS 
*/}
{/** The number of operation here is n + n = one operation => O(1)*/}
function addItems(n) {
   return n + n
}
console.log(addItems(3))

{/** The number of operation here is n + n + n = two operations => O(2)*/}
{/** We do simplify this to O o One - O(1) no matter the amount of operations */}
function addItemsTwo(n) {
    return n + n + n 
}
console.log(addItemsTwo(5))