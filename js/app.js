// Finds the menu button and the navigation links on the page.
const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');

// Only sets up the menu if both elements exist.
if (menuButton && navLinks) {
  // Lets the CSS know JavaScript is available for the mobile menu.
  document.body.classList.add('js-enabled');

  // Clicking the button closes an open menu or opens a closed one.
  menuButton.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      navLinks.classList.add('open');
      menuButton.innerText = 'Close Menu';

      // Tells screen readers that the menu is now expanded.
      menuButton.setAttribute('aria-expanded', 'true');
    }
  });

  // Finds each link inside the navigation.
  const links = navLinks.querySelectorAll('a');

  // Closes the menu after a visitor chooses a link.
  for (let link of links) {
    link.addEventListener('click', closeMenu);
  }

  // Escape closes the menu and puts keyboard focus back on the button.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });
}

// Keeps the closing steps in one place so we can reuse them.
function closeMenu() {
  navLinks.classList.remove('open');
  menuButton.innerText = 'Menu';
  menuButton.setAttribute('aria-expanded', 'false');
}
