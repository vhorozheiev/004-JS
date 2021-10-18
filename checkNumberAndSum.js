let firstNumber = +prompt("Please, enter a first number: ", 10);
let secondNumber = +prompt("Please, enter a second number: ", 12);


function checker(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    if (firstNumber == 50 || secondNumber == 50 || sum == 50) {
        console.log(true);
    }else{
        console.log(false);
    }
}

checker(firstNumber, secondNumber);

