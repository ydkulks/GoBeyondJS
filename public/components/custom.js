// 1
class Nav extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <!--
    <script src="../../htmx.org@1.9.10"></script>
    <script src="https://cdn.tailwindcss.com"></script>
      -->
    <div class="flex justify-between m-5">
      <h1 class="text-3xl font-bold">GoBeyondJS</h1>
      <nav id="navbar">
        <ul class="flex space-x-7 "hx-boost="true">
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

const currentCount = () => {
  var count = document.getElementById("count").innerText;
  return count
}
