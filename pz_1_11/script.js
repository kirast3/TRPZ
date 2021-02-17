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

//Task 4
function calculate (num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

//Task 5
//Part 1
function isDivisible(n,x,y){
    let end;
    if(n%x==0 && n%y==0){
        end="Success";
    }else{
        end="Error";
    }
    return end;
}
console.log(isDivisible(12,5,4));
//Part 2
const isd= (n,x,y) =>{
    const s=(n%x==0) && (n%y==0);
    return s;
};
console.log(isd(12,3,4))
//Part 3
function isD(n,x,y){
    let res=(n%x==0 && n%y==0) ? 'Success' : 'Error';
    return res;
}
console.log(isD(13,3,4));

// Task 6
function magicArrayFunction(elementsCount) {
    function random(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
    let magicArrayOfOdd = [];
    let magicArray = [];
    for (let i = 0; i < elementsCount; i++) {
        magicArray.push(random(1,100));
    }
    console.log(magicArray);
    let maxValue = 0;
    let minValue = 1000;
    let elementsSum = 0;
    for (let i = 0; i < magicArray.length; i++) {
        if (magicArray[i] > maxValue) {
            maxValue = magicArray[i];
        }
        if (magicArray[i] < minValue) {
            minValue = magicArray[i];
        }
        if (magicArray[i] % 2 == 1) {
            magicArrayOfOdd.push(magicArray[i]);
        }
        elementsSum += magicArray[i];
    }
    console.log("Biggest number is " + maxValue);
    console.log("Lowest number is " + minValue);
    console.log("Sum of elements is " + elementsSum);
    console.log("Average is " + elementsSum / magicArray.length);
    console.log("Odd numbers is " + magicArrayOfOdd);
}

// Task 7
function magic2DArrayFunction() {
    let magicArray = [[],[],[],[],[]];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            magicArray[i][j] = Math.round(-50 + Math.random() * (100));
        }
    }
    console.log(magicArray);
    setTimeout(()=>{
        let newMagicArray = magicArray.slice();
        for (let i = 0; i < 5; i++) {
            if (newMagicArray[i][i] < 0) {
                newMagicArray[i][i] = 0;
            }
            if (newMagicArray[i][i] > 0) {
                newMagicArray[i][i] = 1;
            }
        }
        console.log(newMagicArray);
    }, 2000);
}

// Task 8
function mathOperations(number1, number2, operationType) {
    switch (operationType) {
        case "Add":
            return number1 + number2;
        case "Sub":
            return number1 - number2;
        case "Mul":
            return number1 * number2;
        case "Div":
            if(number2 == 0) {
                alert("Can't divide by 0");
                break;
            }
            else {
                return number1 / number2;
            }
        default:
            alert("Hello World");
            break;
    }
}

