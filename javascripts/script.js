'use strict';

let modal = document.querySelector('.modal');

let btn = document.querySelector('.Modal-openBtn')
(function popUpModalWindow() {
    btn.addEventListener('click', () => {
        modal.classList.remove('disappearance');
        modal.classList.add('popUp');
    })
})();





