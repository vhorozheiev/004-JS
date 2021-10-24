/* Write a JS program to find if the first number 
is larger from the two given positive integers */

let firstNumber = 20;
let secondNumber = 12;
let thirdNumber = 8;


findLargerNumber(firstNumber, secondNumber, thirdNumber);

function findLargerNumber(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        return true;
    }
    return false;
};

