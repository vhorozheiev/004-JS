let firstNumber = +prompt("Please, enter a first number: ", 10);
let secondNumber = +prompt("Please, enter a second number: ", 12);


checkBiggestNumber(firstNumber, secondNumber);

function checkBiggestNumber(firstNumber, secondNumber) {
    return firstNumber > secondNumber ? true : false;
};


function findBiggestNumber(firstNumber, secondNumber) {
    if (firstNumber == secondNumber) {
        console.log("these numbers are equal");
    }
    else if (firstNumber > secondNumber) {
        return firstNumber;
    }
    else {
        return secondNumber;
    }
}

//findBiggestNumber(firstNumber, secondNumber);
