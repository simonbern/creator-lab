// TEMPORARY preview bar listing every page. Remove this file and its <script> tag on each page before launch.
(() => {
  const pages = [
    ['index.html', 'Landing'],
    ['apply.html', 'Apply + booking'],
    ['booked.html', 'Call booked'],
    ['onboarding.html', 'Onboarding'],
  ];
  const here = location.pathname.split('/').pop() || 'index.html';
  const css = document.createElement('style');
  css.textContent = `
    #pv{position:fixed;top:0;left:0;right:0;height:40px;z-index:9999;display:flex;align-items:center;gap:4px;padding:0 8px;background:#000;color:#8d867c;font:600 11px/1 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.08em;text-transform:uppercase;overflow-x:auto;white-space:nowrap;box-shadow:0 6px 18px rgba(0,0,0,.5)}
    #pv{scrollbar-width:none}#pv::-webkit-scrollbar{display:none}
    #pv b{padding:6px 9px;margin-right:6px;border-radius:2px;background:#e2cfb6;color:#14110e;font-weight:800}
    #pv a{color:#8d867c;padding:8px 10px;text-decoration:none;border-radius:2px;transition:color .2s,background .2s}
    #pv a:hover{color:#f1ece4}
    #pv a.on{background:#1f1c19;color:#f1ece4}
    body{padding-top:40px!important}
    body>nav{top:40px!important}`;
  const bar = document.createElement('div');
  bar.id = 'pv';
  bar.innerHTML = '<b>PREVIEW</b>' + pages.map(([f, l]) => `<a href="${f}"${f === here ? ' class="on"' : ''}>${l}</a>`).join('');
  document.head.appendChild(css);
  document.body.prepend(bar);
  bar.querySelector('.on')?.scrollIntoView({inline: 'center', block: 'nearest'});
})();
