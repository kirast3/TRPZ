// Task 1
function seconds (total) {
    if (total<60)
        console.log("ERROR! Total < 60 !")
    else
        return total % 60;

}

// Task 2
function perimeter (sideLength, count) {
    return sideLength * count;
}

// Task 3
function printDigits (n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 == 0) {
            console.log("fizz");
        }
        else if (i % 5 == 0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    }
}