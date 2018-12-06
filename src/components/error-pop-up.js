let instance = null;

export class ErrorPopup {
  constructor() {
    if (!instance) {
      instance = this;
      this.popup = this.createPopup();
      this.body = document.querySelector('body');
    }
  }

  createPopup() {
    let popup = document.createElement('div');
    popup.classList.add('error-popup');
    popup.innerHTML = `hello world`;
    return popup;
  }

  showPopup() {
    this.body.appendChild(this.popup);
  }

  hidePopup() {
    this.body.removeChild(this.popup);
  }
}
