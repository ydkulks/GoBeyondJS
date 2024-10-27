// 1
class Nav extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="flex justify-between mx-4">
      <h1 class="text-xl font-bold">GoBeyondJS</h1>
      <nav id="navbar">
         <ul class="flex gap-4"hx-boost="true">
          <li class="hover:underline rounded-md"><a href="/">Home</a></li>
          <li class="hover:underline rounded-md"><a href="/htmx">HTMX</a></li>
          <li class="hover:underline rounded-md"><a href="/go">Go</a></li>
        </ul>
      </nav>
    </div>
    `;
  }
}

customElements.define('nav-bar', Nav);

// 2
class Loading extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <p class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="12" cy="12" r="3" fill="currentColor"><animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="20" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle></svg>
      </p>
    `;
  }
}
customElements.define('loading-svg', Loading);

// Counter logic to get current value of the counter
const currentCount = () => {
  var count = document.getElementById("count").innerText;
  return count
}

// dynamic script and style loading
const loadScript = (src, callback) => {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

const loadStyle = (href, callback) => {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = href;
  link.onload = callback;
  document.head.appendChild(link);
};

const htmxTemplates = async () => {
  loadScript('https://unpkg.com/htmx.org/dist/ext/client-side-templates.js', () => {
    console.log("client-side-templates loaded");
  });
  loadScript('https://unpkg.com/mustache@latest', () => {
    console.log("mustache loaded");
  });
};

const prismJS = () => {
  loadStyle('https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-atom-dark.css', () => {
    // console.log("prism-atom-dark.css loaded");
  });
  loadStyle('https://cdn.jsdelivr.net/npm/prismjs@1.14.0/plugins/toolbar/prism-toolbar.css', () => {
    // console.log("prism-toolbar.css loaded");
    loadScript('https://cdn.jsdelivr.net/npm/prismjs@1.14.0/plugins/toolbar/prism-toolbar.min.js', () => {
      // console.log("prism-toolbar.min.js loaded");
      loadScript('https://cdn.jsdelivr.net/npm/prismjs@1.14.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js', () => {
        // console.log("prism-copy-to-clipboard.min.js loaded");
      });
    });
  });
  loadScript('https://cdn.jsdelivr.net/npm/prismjs@1.25.0/prism.min.js', () => {
    // console.log("prism.min.js loaded");
  });
  loadScript('https://cdn.jsdelivr.net/npm/prismjs@v1.x/plugins/autoloader/prism-autoloader.min.js', () => {
    // console.log("prism-autoloader.min.js loaded");
  });
};

// loadScript('https://unpkg.com/htmx.org@1.9.10',()=>{console.log("htmx loaded")});
// loadScript('https://cdn.tailwindcss.com',()=>{console.log("tailwind loaded")});
