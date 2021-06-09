import refs from './htmlMarkup';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


if (localStorage.getItem('theme')) {
  let currentTheme = localStorage.getItem('theme');
  refs.body.classList.add(currentTheme);
  if (currentTheme === 'dark-theme') {
    refs.themeSwitch.checked = true;
  }
}
refs.themeSwitch.addEventListener('change', function () {
  refs.body.className = '';
  if (this.checked) {
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});