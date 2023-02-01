'use strict';
// whenever the usr clicks on check! the event triggeres
// type of event is 'click'
// The value of entered number is now stored in the guess variable
// we can  now check the value
// we there is no value we can display the  appropriate messages

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'not a number!!! ⛔';
  } else {
    document.querySelector('.message').textContent = 'Hmm some number 🤔';
  }
});
