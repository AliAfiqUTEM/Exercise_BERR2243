/*IF ELSE STATEMENT FORMAT
if (condition){
    statements;
}else if (condition){
    statements;
}else{
    statements;
}*/

//IF ELSE STATEMENT//

/*var DATA_1 = [1,2,3,4,5,6,7,8,9,10];
var DATA_2 = [11,12,13,14,15,16,17,18,19,20];

console.log( "Before:");
console.log(DATA_1);
console.log(DATA_2);

let x = DATA_1;
let y = DATA_2

if (x.some(num=>num%2==0)){
    console.log(x);
}else if (y.some(num=>num%2==0)){
    console.log(y);
}else{
    console.log("NO DATA");
}

let num1 = 10;

if (num1 > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is 5 or less");
}

let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("You just became an adult!");
} else {
    console.log("You are an adult.");
}*/

/*let num2 = 10;

if (num2 > 5 && num2 < 11 ) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is 5 or less");
}*/

// Checking Even or Odd Number//
/*let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}*/

//Nested If Satements//
/*let score = 85;

if (score >= 50) {
    console.log("You passed.");
    
    if (score >= 80) {
        console.log("You got an A!");
    }
} else {
    console.log("You failed.");
}*/

/*//Practice Questions://

//1)Write a program that checks if a number is positive, negative, or zero.//
//let int = 0;// //IF THE NUMBER IS FIXED//
//IF WANT TO TAKE USER INPUT AS THE NUMBER// 
/*const readline = require("readline-sync"); // Import readline-sync for user input

let num = readline.question("Enter an integer: "); // Get user input

num = Number(num); // Convert input to a number

if (isNaN(num)) {
    console.log("Invalid input! Please         enter a valid number.");
} else if (num < 0) {
    console.log("Integer:", num);
    console.log("Negative Integer");
} else if (num > 0) {
    console.log("Integer:", num);S
    console.log("Positive Integer");
} else {
    console.log("Integer:", num);
    console.log("Integer is equal to 0");
}*/

//2)Check if a given year is a leap year.//
/*const readline = require("readline-sync"); // Import readline-sync for user input

let num = readline.question("Enter an integer: "); // Get user input

num = Number(num); // Convert input to a number

if (isNaN(num)) {
    console.log("Invalid input! Please enter a valid number.");
} else if (num % 4 == 0) {
    console.log("Year:", num);
    console.log("This Is A Leap Year")
} else {
    console.log("Year:", num);
    console.log("This Is Not A Leap Year");
}*/

//3)Write a program that determines if a person is eligible to vote.//
/*const readline = require("readline-sync");

let age = readline.question("How Old Are You?");

age = Number(age);

if(age>150){
    console.log("Please Enter A Valid Age!");
}else if (age>21&&age<150){
    console.log("Your Age Is:",age);
    console.log("You Are Eligible To Vote")
}else{
    console.log("Your Age Is:",age);
    console.log("Go Die KID!!!!!!");
}*/

//FOR LOOP!!!!!!!!!!!//

/*var sum1 = 0;
for (var i= 1; i<100; i++){
    sum1 = sum1+i;
    console.log(i,":",sum1);
}*/

/*var sum2 = 0;
for (i=1; i<100; i++){
    console.log(i); 
}*/

/*var s1 = ["h","e", "l","l","o"];
var s2 = "";
for(var i=0; i<s1.length; i++){
    s2 =s2 + s1[i];
    console.log(s2);
}*/

//FOR LOOP//
/*
const readline = require("readline-sync");
let password = "";

while (password !== "1234") {
    password = readline.question("Enter password: ");
}
console.log("Access granted!");
*/

//Example: Same Task with Both Loops//
/*for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
*/


/*Use for Loop When:
✅ You know the exact number of iterations in advance.
✅ You have an initial value, condition, and increment/decrement step in a structured format.
✅ Best for: Fixed repetition (e.g., iterating through an array, counting numbers).
🔹 Use while Loop When:
✅ You don’t know in advance how many times the loop will run.
✅ You need to loop until a condition is met (based on user input, sensor data, etc.).
✅ Best for: User input validation, waiting for an event, reading a file, etc.*/
