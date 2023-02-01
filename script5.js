'use strict';

// adding evenlistener to detect and handle the event
// it takes 2 arguments the type of event and event handler( function name i.e called when an event occurs )
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
