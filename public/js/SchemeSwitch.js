const doSwitch = (scheme, load) => {
  const switchTrigger = document.querySelector('.scheme-switch');

  switch (scheme) {
    case 'tech':
      localStorage.setItem('scheme', 'tech');
      document.body.classList.add('scheme-tech');
      document.body.classList.remove('scheme-art');

      if (switchTrigger) {
        if (load) {
          switchTrigger.classList.add('switched');
        }
        switchTrigger.classList.add('scheme-art');
        switchTrigger.classList.remove('scheme-tech');
      }

      break;

    case 'art':
    default:
      localStorage.setItem('scheme', 'art');
      document.body.classList.add('scheme-art');
      document.body.classList.remove('scheme-tech');

      if (switchTrigger) {
        switchTrigger.classList.add('scheme-tech');
        switchTrigger.classList.remove('scheme-art');
      }

      break;

  }
};

const currentScheme = localStorage.getItem('scheme');
doSwitch(currentScheme, true);

const switchTrigger = document.querySelector('.scheme-switch');

if (switchTrigger && !switchTrigger.classList.contains('js-scheme-switch')) {
  switchTrigger.classList.add('js-scheme-switch');

  switchTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('.section');

    if (header) {
      header.style.transition = 'all 1000ms ease-in-out';
    }

    sections.forEach((section) => {
      section.style.transition = 'all 1000ms ease-in-out';
    });

    const currentScheme = localStorage.getItem('scheme');
    doSwitch(currentScheme === 'tech' ? 'art' : 'tech');
  });

}
