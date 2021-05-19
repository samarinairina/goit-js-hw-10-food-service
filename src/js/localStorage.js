import refs from './htmlMarkup';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('theme', JSON.stringify(Theme));

const savedTheme = localStorage.getItem('theme');

const parsedTheme = JSON.parse(savedTheme);

let currentThemeParse = JSON.parse(localStorage.getItem('currentTheme'));

refs.body.classList.add(currentThemeParse);

if (refs.body.classList.contains(parsedTheme.DARK)) {
  refs.themeSwitch.checked = true;
}

function changeTheme() {
    if (refs.body.classList.contains(parsedTheme.DARK)) {
        refs.body.classList.remove(parsedTheme.DARK);
        refs.body.classList.add(parsedTheme.LIGHT);
        localStorage.removeItem('currentTheme', JSON.stringify(parsedTheme.DARK));
        localStorage.setItem('currentTheme', JSON.stringify(parsedTheme.LIGHT));
    } else {
        refs.body.classList.remove(parsedTheme.LIGHT);
        refs.body.classList.add(parsedTheme.DARK);
        localStorage.removeItem('currentTheme', JSON.stringify(parsedTheme.LIGHT));
        localStorage.setItem('currentTheme', JSON.stringify(parsedTheme.DARK));
    };
}

refs.themeSwitch.addEventListener('change', changeTheme);