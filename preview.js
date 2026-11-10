// TEMPORARY preview bar listing every page. Remove this file and its <script> tag on each page before launch.
(() => {
  const pages = [
    ['index.html', 'Landing'],
    ['masterclass.html', 'Masterclass sign-up'],
    ['masterclass-thanks.html', 'Masterclass thank-you'],
    ['masterclass-watch.html', 'Masterclass video'],
    ['apply.html', 'Apply + booking'],
    ['booked.html', 'Call booked'],
    ['edit-kit.html', 'Edit Kit'],
    ['edit-kit-thanks.html', 'Edit Kit thank-you'],
    ['concept-engine.html', 'Concept Engine'],
    ['onboarding.html', 'Onboarding'],
  ];
  const here = location.pathname.split('/').pop() || 'index.html';
  const css = document.createElement('style');
  css.textContent = `
    #pv{position:fixed;top:0;left:0;right:0;height:40px;z-index:9999;display:flex;align-items:center;gap:4px;padding:0 8px;background:#1a56db;color:#fff;font:13px/1 Arial,Helvetica,sans-serif;overflow-x:auto;white-space:nowrap}
    #pv b{padding:0 8px;color:#fff}
    #pv a{color:#fff;padding:8px 10px;text-decoration:none;border-radius:3px}
    #pv a:hover{background:rgba(255,255,255,.15)}
    #pv a.on{background:#fff;color:#1a56db}
    body{padding-top:40px!important}
    body>nav{top:40px!important}`;
  const bar = document.createElement('div');
  bar.id = 'pv';
  bar.innerHTML = '<b>PREVIEW</b>' + pages.map(([f, l]) => `<a href="${f}"${f === here ? ' class="on"' : ''}>${l}</a>`).join('');
  document.head.appendChild(css);
  document.body.prepend(bar);
  bar.querySelector('.on')?.scrollIntoView({inline: 'center', block: 'nearest'});
})();
