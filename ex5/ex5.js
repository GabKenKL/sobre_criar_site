'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.add('tema-claro');
    document.body.classList.remove('tema-escuro');

    console.log('Classes atuais: ' + document.body.className);
});

const switcher2 = document.querySelector('.btn2');

switcher2.addEventListener('click', function() {
    document.body.classList.add('tema-escuro');
    document.body.classList.remove('tema-claro');

    console.log('Classes atuais: ' + document.body.className);
});

const switcher3 = document.querySelector('.btn2x');

switcher3.addEventListener('click', function() {
    document.body.classList.toggle('tema-claro');
    document.body.classList.toggle('tema-escuro');
});
