const links = document.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = e.target.closest(`a`).getAttribute('href');
    if (!href) return;
    if (href !== '#') {
      const scrollToEl = document.querySelector(href);
      scrollToEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});
