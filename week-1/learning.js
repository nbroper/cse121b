//example debug
let currentDateAndTime = new Date();
console.log(`It is now ${currentDateAndTime}`); //this method is called template literal
let theTotal = getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("The total is " + theTotal)


function getSum(...theNumbers) {
    let sum = 0;
    for (let aNumber of theNumbers) {
        sum += aNumber;
    }
    return sum;
}