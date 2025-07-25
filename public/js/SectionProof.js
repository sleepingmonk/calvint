document.addEventListener('DOMContentLoaded', () => {
  const reel = document.querySelector('.proof .reel');
  const reelItems = reel.querySelectorAll('.item');
  let scrollDir = 1;
  let reelEngaged = 0;

  if (!reel.classList.contains('js-proof')) {
    reel.classList.add('js-proof');

    ['wheel', 'pointerdown'].forEach((event) => {
      reel.addEventListener(event, () => {
        reelEngaged = 2;
      });
    });
  }

  setInterval(() => {
    if (reelEngaged) {
      reelEngaged--;
      return;
    }

    const remainingScrollDistance = reel.scrollWidth - reel.scrollLeft - reel.clientWidth;

    if (remainingScrollDistance < reel.clientWidth) {
      scrollDir = -1;
    }

    if (reel.scrollLeft === 0) {
      scrollDir = 1;
    }

    reel.scrollLeft += reel.clientWidth * scrollDir;
  }, 9000);
});
