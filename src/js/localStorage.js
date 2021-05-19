import refs from './htmlMarkup';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

 localStorage.setItem('theme', JSON.stringify(Theme));

const savedTheme = localStorage.getItem('theme');

const parsedTheme = JSON.parse(savedTheme);

 

refs.body.classList.add(Theme.DARK)
if (refs.body.classList.contains(parsedTheme.DARK)) {
  refs.themeSwitch.checked = true;
}

function changeTheme() {
    if (refs.body.classList.contains(Theme.DARK)) {
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
        localStorage.removeItem('theme', JSON.stringify(parsedTheme.DARK));
        localStorage.setItem('theme', JSON.stringify(parsedTheme.LIGHT));
    } else {
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
        localStorage.removeItem('theme', JSON.stringify(parsedTheme.LIGHT));
        localStorage.setItem('theme', JSON.stringify(parsedTheme.DARK));
    };
}

refs.themeSwitch.addEventListener('change', changeTheme);