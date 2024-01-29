let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.getElementById('theme-toggle');
const themeImage = document.getElementById('theme-image');

const enableDarkMode = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
  themeImage.src = "/images/icons/sun.svg";
}

const disableDarkMode = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('darkMode', null);
  themeImage.src = "/images/icons/moon.svg";
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
} else {
    disableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});
