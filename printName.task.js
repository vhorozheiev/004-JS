/* Write a JS program to combine 
and print your first, last name and age */

let firstName = prompt("Please, enter your name: ", "Vlad");
let lastName = prompt("Please, enter your surename: ", "Horozheiev");
let age = prompt("Please, enter your age: ", "26");

printName(firstName, lastName, age);

function printName(firstName, lastName, age) {
    console.log(firstName + " " + lastName + " " + age);
}
