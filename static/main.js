"use strict";

// Ивент на скролл
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


// Проверка на windows
const userAgent = window.navigator.userAgent;

const isWindows = userAgent.includes('Windows');

if (!isWindows) {
    // Получаем все элементы с классом .special-element
    const elements = document.getElementsByClassName('download-button');
    
    // Добавляем класс .non-windows ко всем элементам
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('non-windows');
    }
    
    // Меняем текст в элементах с классом .message
    const messages = document.getElementsByClassName('download-button');
    for (let i = 0; i < messages.length; i++) {
        messages[i].innerText = 'Unsupported system';
    }
}
