/* Write a JS program to create a new string 
adding “Test_" in front of a given string */

let s = prompt("enter a string", " ");

function createString(s) {
    return "Test " + s;
}

console.log(createString(s));