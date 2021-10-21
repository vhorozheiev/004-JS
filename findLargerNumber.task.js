/* Write a JS program to find if the first number 
is larger from the two given positive integers */

let firstNumber = +prompt("Please, enter a first number: ", 10);
let secondNumber = +prompt("Please, enter a second number: ", 12);


findLargerNumber(firstNumber, secondNumber);

function findLargerNumber(firstNumber, secondNumber) {
    return firstNumber > secondNumber ? true : false;
};

