const toggler = document.getElementById('menu-toggler');
const leftMenu = document.getElementById('leftMenu');
const leftMenuWrapper = document.getElementById('leftMenuWrapper');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('toggle-open');
  leftMenu.classList.toggle('left-menu-open');
  leftMenuWrapper.classList.toggle('left-menu-open');
});

leftMenuWrapper.addEventListener('click', () => {
  toggler.classList.toggle('toggle-open');
  leftMenu.classList.toggle('left-menu-open');
  leftMenuWrapper.classList.toggle('left-menu-open');
});
