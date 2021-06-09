import markup from '../templates/markup.hbs';
import menu from '../menu.json';

const refs = {
    body: document.querySelector('body'),
    ulMenu: document.querySelector('.js-menu'),
    themeSwitch: document.querySelector('#theme-switch-toggle'),

    }

const markupLi = markup(menu);

refs.ulMenu.insertAdjacentHTML('beforeend', markupLi);

export default refs;




