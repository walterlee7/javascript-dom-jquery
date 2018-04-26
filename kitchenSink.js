//set a name variable
let name = "Walt";

//set a constant for 50 states
const states = "50";

//function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

//console log add function
console.log(add(1, 2));
console.log(add(100, 200));

//console log ASCII code for first letter of name and states variables
console.log(name.charCodeAt(0));
console.log(states.charCodeAt(0));

//if else statement function that consoles a different message based on ASCII code
let highLow = (i) => {

    if (name.charCodeAt(0) > i) {
        console.log('higher than ' + i);
    } else {
        console.log('lower than ' + i);
    }
}

highLow(76);
