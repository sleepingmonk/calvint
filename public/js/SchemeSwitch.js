const switchTrigger = document.querySelector('.scheme-switch');

if (switchTrigger && !switchTrigger.classList.contains('js-scheme-switch')) {
  switchTrigger.classList.add('js-scheme-switch');
  switchTrigger.addEventListener('pointerup', (e) => {
    document.body.classList.toggle('scheme-art');
  });
}
