'use strict';
console.log(document.querySelector('h1').textContent);
console.log(document.querySelector('.message').textContent);

// multiple dot operations are executed from left to right
// document.querySelector() select's the specified element i.e it will be replaced by the html element
// and .textContent  select's the text content of the element

document.querySelector('.message').textContent = 'Correct Message 😀';
console.log(document.querySelector('.message').textContent);
// some more DOM manipulations
document.querySelector('.number').textContent = 20;
document.querySelector('.label-score').textContent = 25;
// using the .value property
// setting value
//displaying the value
console.log(document.querySelector('.number').textContent);

//document.querySelector('.guess').value = 27;
const guess = Number(document.querySelector('.guess').value);
console.log(typeof guess, guess);
