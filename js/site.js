// Wht Knight Software site script: light/dark switch and the email reveal.
(function () {
  var root = document.documentElement;

  function systemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function currentlyDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : systemDark();
  }

  // Light/dark switch: follows the device until pressed, then remembers the choice.
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    function label() {
      btn.setAttribute('aria-label', currentlyDark() ? 'Switch to light mode' : 'Switch to dark mode');
    }
    label();
    btn.addEventListener('click', function () {
      var next = currentlyDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
  });

  // Email reveal: the address is never written in the page; it's assembled only when clicked.
  var parts = ['whtknightsoft', 'gmail', 'com'];
  document.querySelectorAll('.reveal').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      if (a.dataset.shown) return; // second click opens the mail app normally
      ev.preventDefault();
      var addr = parts[0] + '@' + parts[1] + '.' + parts[2];
      a.href = 'mailto:' + addr;
      a.textContent = addr;
      a.dataset.shown = '1';
    });
  });
})();
