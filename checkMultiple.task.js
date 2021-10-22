/* Write a JS program check if a given positive 
number is a multiple of 3 or a multiple of 7 */

let number = 21;

function checkMultiple(number) {
    if (number % 3 == 0 || number % 7 == 0) {
        return true;
    }
    return false;
}

checkMultiple(number);