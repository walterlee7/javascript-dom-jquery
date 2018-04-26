//set a name variable
let name = "Walt";
document.getElementById("name").innerHTML = name;

//set a constant for 50 states
const states = "50";
document.getElementById("states").innerHTML = states;

//function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

//console log add function
console.log('1 + 2 = ' + add(1, 2));
console.log('100 + 200 = ' + add(100, 200));

//console log ASCII code for first letter of name and states variables
console.log('ASCII code for the letter W: ' + name.charCodeAt(0));
console.log('ASCII code for the number 5: ' + states.charCodeAt(0));

//if else statement function that consoles a different message based on ASCII code
let highLow = (i) => {

    if (name.charCodeAt(0) > i) {
        console.log('higher than ASCII code ' + i);
    } else {
        console.log('lower than ASCII code ' + i);
    }
}

highLow(76);

//Hello World function
let hello = (message) => {
    console.log(message);
    console.log('message has ' + message.length + ' characters.');
}

hello("Hello World");

//check age function that loops thru an array of objects
let checkAge = (name, age) => {
    if (age < 21) {
        console.log(name + ' is not old enough to drink.');
    } else {
        console.log(name + ' is old enough to drink.');
    }
}

let people = [
    {
        name: 'Charles',
        age: 21
    },
    {
        name: 'Gabby',
        age: 27
    },
    {
        name: 'James',
        age: 18
    },
    {
        name: 'John',
        age: 17
    }
]

for (i = 0; people.length > i; i++) {
    checkAge(people[i].name, people[i].age);
}

//loop that console logs an array of strings
let vegetable = ['avocado', 'broccoli', 'mushrooms', 'potato', 'carrot'];

for (let i = 0; vegetable.length > i; i++) {
    console.log(vegetable[i]);
}

//function to check if number is even or odd
function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}

evenOrOdd(1);