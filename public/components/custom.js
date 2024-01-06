// 1
class Nav extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="flex justify-between m-5">
      <h1 class="text-3xl font-bold">GoBeyondJS</h1>
      <nav id="navbar">
        <ul class="flex space-x-2 "hx-boost="true">
          <li class="hover:underline rounded-md"><a href="/">Home</a></li>
          <li class="hover:underline rounded-md"><a href="/login">Login</a></li>
          <li class="hover:underline rounded-md"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    `;
  }
}

customElements.define('nav-bar', Nav);

// 2
class Footer extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <form class="flex justify-center">
      <div class="bg-red-100 p-3 rounded-lg max-w-fit">

        <h1 class="text-3xl font-bold text-center mt-5 mb-5">Login</h1>

        <div class="flex justify-center m-1">
          <input type="text" class="px-2 py-1 rounded-md" placeholder="Username">
        </div>
        <div class="flex justify-center m-1">
          <input type="password" class="px-2 py-1 rounded-md" placeholder="Password">
        </div>
        <div class="flex justify-center m-1">
          <button
            class="text-slate-100 text-1xl bg-sky-400 hover:bg-sky-500 px-3 py-1 mb-5 mt-5 w-48 rounded-md">Submit</button>
        </div>
      </div>
    </form>
    `;
  }
}

customElements.define('footer-section', Footer);

const currentCount = () => {
  var count = document.getElementById("count").innerText;
  return count
}
