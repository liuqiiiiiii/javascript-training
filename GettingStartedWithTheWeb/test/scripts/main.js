// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/SiberianHusky.jpeg') {
//       myImage.setAttribute('src', 'images/monkey.jpeg');
//     } else {
//       myImage.setAttribute('src', 'images/SiberianHusky.jpeg');
//     }
// }

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Siberian Husky is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Siberian Husky is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
