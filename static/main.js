"use strict";

const element = document.getElementById('header');

function checkScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        element.classList.add('dark-header');
    } else {
        element.classList.remove('dark-header');
    }
}

window.addEventListener('load', checkScroll);

window.addEventListener('scroll', checkScroll);
