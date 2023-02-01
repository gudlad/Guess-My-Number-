'use strict';

//NOTES:
// whenever the usr clicks on check! the event triggers
// type of event is 'click'
// The value of entered number is now stored in the guess variable
// we can  now check the value
// we there is no value we can display the  appropriate messages

//code:
// generated random numbers between 1 and 20(includes 20)

// lets create a state variables
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'not a number!!! ⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number 😄';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game💥💥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game💥💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});
