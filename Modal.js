class Modal {
  target;
  state;

  constructor(target) {
    this.target = target;
    this.initState();
    this.setEvent();
    this.render();
  }

  initState() {
    this.state = {
      contentText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    };
  }

  template() {
    return `
      <div class="modal-wrapper">
        <dialog class="modal">
          <div class="modal__header">
            <div class="modal-title">
              DEMO
            </div>
            <div class="modal-close-btn-wrapper">
              <button class="modal-close-btn">+</button>
            </div>
          </div>
          <div class="modal__main">
            
            <div class="modal-content">
              ${this.state.contentText}
            </div>
          </div>
          <div class="modal__footer"></div>
        </dialog>
      </div>
      
    `;
  }

  close() {
    this.target.querySelector(".modal").close();
    this.target.querySelector(".modal-wrapper").classList.remove("show");
  }

  click({ target }) {
    if (
      target === this.target.querySelector(".modal-close-btn") ||
      target === this.target.querySelector(".modal-wrapper")
    ) {
      this.close();
    }
  }

  setEvent() {
    this.target.addEventListener("click", this.click.bind(this));
  }

  render() {
    this.target.innerHTML = this.template();
  }
}

export default Modal;
