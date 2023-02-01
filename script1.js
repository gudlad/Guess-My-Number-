'use strict';
console.log(document.querySelector('h1').textContent);
console.log(document.querySelector('.message').textContent);
// multiple dot operations are executed from left to right
// document.querySelector() select's the specified element i.e it will be replaced by the html element
// and .textContent  select's the text content of the element
