// hifz stages: hide -> reveal -> check, on a slow loop
(() => {
  const frames = ['hifz-hidden', 'hifz-half', 'hifz-shown'];
  const img = document.getElementById('hifzimg');
  const dots = document.querySelectorAll('#hifzdots span');
  let i = 0;
  setInterval(() => {
    i = (i + 1) % frames.length;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = 'assets/' + frames[i] + '.png';
      img.style.opacity = 1;
    }, 250);
    dots.forEach((d, j) => d.classList.toggle('on', j === i));
  }, 2200);
})();
// lines-per-view toggle
(() => {
  const img = document.getElementById('linesimg');
  document.querySelectorAll('#lineseg button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#lineseg button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      img.src = 'assets/lines' + b.dataset.n + '.png';
    });
  });
})();

// edition toggle
(() => {
  const img = document.getElementById('edimg');
  document.querySelectorAll('#edseg button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#edseg button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      img.src = 'assets/edition-' + b.dataset.ed + '.png';
    });
  });
})();

// gentle reveal on scroll (skipped for reduced motion)
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll(
    '.card, .featrow, .devrow figure, .contrast figure, .stripfig, ' +
    '.steps li, .dark-block, .updart, .bigcta');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
})();
