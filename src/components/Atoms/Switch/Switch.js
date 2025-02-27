const switches = document.querySelectorAll('.switch');

switches.forEach((sw) => {
  if (!sw.classList.contains('js-switch')) {
    sw.classList.add('js-switch');

    sw.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      sw.classList.toggle('switched');
    });
  }
});
