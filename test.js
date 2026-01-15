
// Print numbers from n to x using a loop.

function printntox(n,x){
    for (i=n;i<=x;i++){
        console.log(i)
    }
}
printntox(1,10)

// Given a number n, check whether it is even or odd.

function checkn(n) {
    if (n%2==0){
        console.log("even");
    }else{
        console.log("odd");   
    }
}
checkn(3)

// Given two numbers a and b, print their sum.

function addab(a,b){
    console.log(a+b)
}
addab(2,5)

//Given a number, print: "Positive" , "Negative" , "Zero"

function checknum(n){
    if(n > 0 ){
        console.log("Positive");
    }else if (n < 0){
        console.log("Negative");
    }else {
        console.log("Zero");
        
    }
}

checknum(0)

//Print "Hello" 5 times

function printhello(n,h){
    let i = 0
    while(i<n){
        console.log(h)
        i++
    }
}

 printhello(9,"hello")

//Given a = 5, b = 7, swap their values

function swapplaces(a,b){
    c = a
    a = b
    b = c
    console.log(a);
    console.log(b); 
}

swapplaces(3,5)

//Check if Adult or Minor

 function checkifMinor(age){
    let decision = age >= 18 ? "Adult" : "Minor" ;
    console.log(decision);
 }
 checkifMinor(17)

 //Given a number, check if it is divisible by both n and y

function isDivisibleBy(num, a, b) {
    if (num % a === 0 && num % b === 0) {
        console.log(`Divisible by both ${a} and ${b}`);
    } else if (num % a === 0) {
        console.log(`Divisible by ${a} only`);
    } else if (num % b === 0) {
        console.log(`Divisible by ${b} only`);
    } else {
        console.log(`Not divisible by ${a} or ${b}`);
    }
}
isDivisibleBy(30, 3, 5);
isDivisibleBy(12, 3, 5);
isDivisibleBy(25, 3, 5);
isDivisibleBy(7, 3, 5);

//print n to 1 (backwords) 

function reversecount(n){
    let arr=[]
    for (let i = n; i >= 1; i--) {
        arr.push(i)    
    }
    console.log(arr);  
}
reversecount(15)

//Find the sum of numbers from 1 to n

function findSumof(n){
    let sum = 0;
    for (let i = n; i >= 1; i--){
        sum += i    
    }
    console.log(sum);
}

findSumof(30)

//Count how many numbers between 1 and 50 are even

function counteven(n,y){
    let evenum = 0;
    let i = n
    while (i <= y){
        if(i % 2 === 1
        ){
            evenum++
        }
        i++
    }
    console.log(evenum);  
}

counteven(1,90)
  

//
