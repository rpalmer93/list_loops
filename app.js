'use strict';

function niceQustion(){
  var correctanswers = 0;

  var nice = prompt('Does Ryan seem like a nice guy?');
  var nice1 = nice.toUpperCase();
  console.log('niceness:', nice);

  if (nice1 === 'YES' || nice1 === 'Y') {
    alert ('You are Correct, Ryan is a nice guy!');
    correctanswers++;
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
    correctanswers++;
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
    correctanswers++;
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
    correctanswers++;
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
    correctanswers++;
  }
  else if (xmas1 === 'NO' || xmas1 === 'N') {
    alert ('Incorrect, Ryan loves Christmas.');
  } else {
    alert ('I dont recognize this response!');
  }
}

function mealQuestion(){
  var meals;
  var counter = 0;

  while (counter !== 4) {
    meals = parseInt(prompt('How many meals did Ryan eat yesterday?'))
    console.log(meals)
    if (meals == 4) {
      alert('You are Correct');
      correctanswers++;
      break
    } else if (meals < 4) {
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
}

function livedQuestion(){
  var states = ['colorado', ' arizona'];
  var answer = prompt('What states has Ryan lived in besides Washington?');
  var flag;

    for (var i = 0; i < 5; i++) {
      console.log('each iteration:', states[i]);
      if ((answer === states[0]) || (answer === states[1])) {
        alert('Correct, you guessed either ' + states[0] + ' or ' + states[1]);
        flag = true;
        correctanswers++;
        break;

      }
      else {
        alert('Nope, you are incorrect');
        answer = prompt('What states has Ryan lived in besides Washington?');

      }
    }
    if (!flag) {
      alert('Nice try, these are the correct states. ' + states);
    }

  alert('You got ' + correctanswers + ' out of 7 correct answers!');
}
