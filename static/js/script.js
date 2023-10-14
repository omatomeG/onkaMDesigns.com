document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu_toggle');
  const menu = document.getElementById('menu_list');

  let isOpen = false;

  menuToggle.addEventListener('click', function () {
    isOpen =  !isOpen;
    menu.classList.toggle('active', isOpen);
    menuToggle.classList.toggle('active', isOpen);
  });
});
