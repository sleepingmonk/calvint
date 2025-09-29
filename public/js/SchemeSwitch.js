const switchTrigger = document.querySelector('.scheme-switch');

if (switchTrigger && !switchTrigger.classList.contains('js-scheme-switch')) {
  switchTrigger.classList.add('js-scheme-switch');

  switchTrigger.addEventListener('click', (e) => {
    if (localStorage.getItem('scheme') === 'art') {
      localStorage.removeItem('scheme');
      document.body.classList.remove('scheme-art');
    } else {
      localStorage.setItem('scheme', 'art');
      document.body.classList.add('scheme-art');
    }
  });

}

if (localStorage.getItem('scheme') === 'art') {
  const hasScheme = document.body.classList.contains('scheme-tech');
  if (!hasScheme) {
    document.body.classList.add('scheme-art');
    switchTrigger.classList.add('switched');
  }
} else {
  document.body.classList.remove('scheme-art');
  switchTrigger.classList.remove('switched');
}
