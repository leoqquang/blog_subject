document.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.getElementById('navbar');
  if (navbarContainer) {
    fetch('/navbar/navbar.html')
      .then(res => res.text())
      .then(data => {
        navbarContainer.innerHTML = data;

        // ✅ Now that navbar is loaded, attach event listener
        const hamburger = navbarContainer.querySelector('.hamburger');
        const nav = navbarContainer.querySelector('.nav');

        if (hamburger && nav) {
          hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger--open');
            nav.classList.toggle('nav--open');
          });
        }
      })
      .catch(err => console.error('Failed to load navbar:', err));
  }
});
