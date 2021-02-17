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
