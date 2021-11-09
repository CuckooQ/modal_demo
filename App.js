class App {
  target;

  constructor(target) {
    this.target = target;
    this.setEvent();
    this.render();
  }

  template() {
    return `
      <header></header>
      <main>
        <div class="demo">
          <button class="modal-btn">OPEN</button>
        </div>
      </main>
      <footer></footer>
    `;
  }

  openModal() {
    const modalRootEl = document.getElementById("modal-root");
    const modalEl = modalRootEl.querySelector(".modal");
    modalEl.show();
    modalRootEl.querySelector(".modal-wrapper").classList.add("show");
  }

  click({ target }) {
    if (target === document.querySelector(".modal-btn")) {
      this.openModal();
    }
  }

  setEvent() {
    this.target.addEventListener("click", this.click.bind(this));
  }

  render() {
    this.target.innerHTML = this.template();
  }
}

export default App;
