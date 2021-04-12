function abTest(a, b) {
    // Only change code below this line

    if (a || b < 0) {
        return undefined;
    }


    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}
console.log(abTest(2, 2)) //should return a number
console.log(abTest(2, 2)) //should return 8
console.log(abTest(-2, 2))// should return undefined
console.log(abTest(2, -2))// should return undefined
console.log(abTest(2, 8))// should return 18
console.log(abTest(3, 3)) //should return 12
console.log(abTest(0, 0)) //should return 0  