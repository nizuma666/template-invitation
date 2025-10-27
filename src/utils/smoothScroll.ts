export const smoothScrollTo = (targetY: number, duration = 1200) => {
  const startY = window.scrollY;
  const distanceY = targetY - startY;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, startY + distanceY * eased);
    if (timeElapsed < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};