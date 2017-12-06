'use strict';

var nice = prompt('Does Ryan seem like a nice guy?');
var nice1 = nice.toUpperCase();
console.log('niceness:', nice);

if (nice1 === 'YES' || nice1 === 'Y') {
  alert ('You are Correct, Ryan is a nice guy!');
}
else if (nice1 === 'NO' || nice1 === 'N') {
  alert ('Incorrect meanie, Ryan is a nice guy!');
} else {
  alert ('I dont recognize this response!');
}


var pet = prompt('Does Ryan own a pet?');
var pet1 = pet.toUpperCase();
console.log('pet:', pet);

if (pet1 === 'YES' || pet1 === 'Y') {
  alert ('You are Incorrect, Ryan does not own a pet.');
}
else if (pet1 === 'NO' || pet1 === 'N') {
  alert ('Correct, sadly Ryan does not own a pet.');
} else {
  alert ('I dont recognize this response!');
}


var siblings = prompt('Does Ryan have any siblings?');
var siblings1 = siblings.toUpperCase();
console.log('siblings:', siblings);

if (siblings1 === 'YES' || siblings1 === 'Y') {
  alert ('You are Correct, Ryan has two siblings!')
}
else if (siblings1 === 'NO' || siblings1 === 'N') {
  alert ('Incorrect, Ryan has two siblings.');
} else {
  alert ('I dont recognize this response!');
}

var car = prompt('Does Ryan own a car?');
var car1 = car.toUpperCase();
console.log('car:', car);

if (car1 === 'YES' || car1 === 'Y') {
  alert ('You are Correct, Ryan owns a Toyota!')
}
else if (car1 === 'NO' || car1 === 'N') {
  alert ('Incorrect, Ryan owns a car.');
} else {
  alert ('I dont recognize this response!');
}


var xmas = prompt('Does Ryan love Christmas?');
var xmas1 = xmas.toUpperCase();
console.log('christmas:', xmas);

if (xmas1 === 'YES' || xmas1 === 'Y') {
  alert ('You are Correct, Ryan loves Christmas, who doesnt?')
}
else if (xmas1 === 'NO' || xmas1 === 'N') {
  alert ('Incorrect, Ryan loves Christmas.');
} else {
  alert ('I dont recognize this response!');
}

var meals;
var counter = 0;

while (counter !== 4) {
  meals = parseInt(prompt('How many meals did Ryan eat yesterday?'))

if (meals < 4) {
  alert('You guessed too low, Ryan eats more than that!');
  counter++;
} else if (meals > 4) {
  alert('You guessed too high, Ryan doesnt eat that much!');
  counter++;
} else if (meals === NaN || meals === null) {
  alert('Please enter a number');
  counter++;
  }
}

console.log('counter:', counter);

var states = ['colorado', 'arizona'];
var answer = prompt('What states has Ryan lived in besides Washington?');
var flag;

for (var i = 0; i < states.length; i++) {
  console.log('each iteration:', states[i]);

  if (answer === states[i]) {
    alert('Correct! That is one of the states where Ryan has lived!');
    flag = true;
    break;
  }
}

if (!flag) {
  alert('Nope, you are incorrect');
}
