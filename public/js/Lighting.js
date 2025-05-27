const elements = document.querySelectorAll('[class*="fade-in"]');

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.target.classList.contains('fade-in--done')) {
      return;
    }

    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in--done');
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
