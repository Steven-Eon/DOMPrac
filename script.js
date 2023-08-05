const firstElement = document.createElement('p');
firstElement.textContent = "Hey I'm red!";
firstElement.setAttribute('style', 'color: red');

const secondElement = document.createElement('h3');
secondElement.textContent = "I'm a blue h3!";
secondElement.style.color = "blue";

const thirdElement = document.createElement('div');
thirdElement.classList.add('divBorder');

const thirdElementFirstChild = document.createElement('h1');
thirdElementFirstChild.textContent = "I'm in a div.";

const thirdElementSecondChild = document.createElement('p');
thirdElementSecondChild.textContent = "ME TOO!";


thirdElement.appendChild(thirdElementFirstChild);
thirdElement.appendChild(thirdElementSecondChild);


const htmlBegin = document.querySelector('body');

htmlBegin.appendChild(firstElement);
htmlBegin.appendChild(secondElement);
htmlBegin.appendChild(thirdElement);