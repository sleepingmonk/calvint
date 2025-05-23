const elements = document.querySelectorAll('[class*="build-in--"]');

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.target.classList.contains('build-in--done')) {
      return;
    }

    if (entry.isIntersecting) {
      entry.target.classList.add('build-in--done');
      entry.target.classList.add('animate');
    }
  });
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.05,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

elements.forEach((element) => observer.observe(element));
