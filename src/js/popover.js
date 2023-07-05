export default class Popover {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onButton = this.onButton.bind(this);
  }

  static get markup() {
    return `
        <button class="button">
            <h2>Click to toggle popover</h2>                           
            <div class="popover">
                <div class="popover_title">Popover title</div>
                <div class="popover_text">And here's some amazing content. It's very engaging. Right?</div>
            </div>
        </button>      
        `;
  }

  static get popoverSelector() {
    return '.popover';
  }

  static get buttonSelector() {
    return '.button';
  }

  bindToDOM() {
    this.parentEl.innerHTML = Popover.markup;
    this.popover = this.parentEl.querySelector(Popover.popoverSelector);
    this.button = this.parentEl.querySelector(Popover.buttonSelector);

    this.button.addEventListener('click', this.onButton);
  }

  onButton(ev) {
    ev.preventDefault();
    if (this.popover.classList.contains('active')) {
      this.popover.classList.remove('active');
    } else {
      this.popover.classList.add('active');
    }
  }
}
