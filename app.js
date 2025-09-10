'use strict';

const switcher = document.querySelector('.btn');
const body = document.body;


const header = document.querySelector('.glitch');


const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');


const image1 = document.createElement('img');
image1.src = 'images/image1.png';
image1.classList.add('image', 'image-left');
imageContainer.appendChild(image1);

const image2 = document.createElement('img');
image2.src = 'images/image2.png';
image2.classList.add('image', 'image-right');
image2.style.opacity = '0';
imageContainer.appendChild(image2);


header.insertAdjacentElement('afterend', imageContainer);

switcher.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    const className = body.className;
    this.textContent = className === "light-theme" ? "Dark" : "Light";

    console.log('current class name: ' + className);
});


document.addEventListener('mousemove', (event) => {
    if (event.clientX > window.innerWidth / 2) {
        image1.style.opacity = '0';
        image2.style.opacity = '1';
    } else {
        image1.style.opacity = '1';
        image2.style.opacity = '0';
    }
});

