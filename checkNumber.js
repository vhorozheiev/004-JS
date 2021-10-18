let num = +prompt("Please, enter an integer", 10);

function checkNumber(num) {
    if (num > 100) {
        return true;
    }
    return false;
};


checkNumber(num);