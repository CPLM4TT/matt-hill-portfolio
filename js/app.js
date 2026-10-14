const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');

if (menuButton && navLinks) {
  document.body.classList.add('js-enabled');

  menuButton.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      navLinks.classList.add('open');
      menuButton.innerText = 'Close Menu';
      menuButton.setAttribute('aria-expanded', 'true');
    }
  });

  const links = navLinks.querySelectorAll('a');

  for (let link of links) {
    link.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });
}

function closeMenu() {
  navLinks.classList.remove('open');
  menuButton.innerText = 'Menu';
  menuButton.setAttribute('aria-expanded', 'false');
}
