/*
Write a JS program to check two given numbers and print true 
if one of the number is 50 or if their sum is 50
*/

let firstNumber = 10;
let secondNumber = 40;


function checker(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    if (firstNumber == 50 || secondNumber == 50 || sum == 50) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checker(firstNumber, secondNumber);

