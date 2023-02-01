'use strict';

//NOTES:
// now we have to manipulate the css
// when the player wins the background have to turn to green and ? have to expand
// we can do these by changing the css properties associated with that elements..

//code:
// generated random numbers between 1 and 20(includes 20)

// lets create a state variables
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when there in so input
  if (!guess) {
    document.querySelector('.message').textContent = 'not a number!!! ⛔';
  }

  // when the player wins
  //
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number 😄';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
  }

  // when guess is too high
  //
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game💥💥';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is low
  //
  else if (guess < secretNumber) {
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
