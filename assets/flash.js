fetch('./manifest.json').then(r => r.json()).then(m => {
  document.getElementById('fw-version').textContent =
      'Version: ' + m.version + ' (' + m.builds[0].chipFamily + ')';
}).catch(() => {});
