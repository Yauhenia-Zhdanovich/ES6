let instance = null;

export class ErrorPopup {
  constructor() {
    if (!instance) {
      instance = this;
      this.popup = this.createPopup();
      this.body = document.querySelector('body');
    }
    return instance;
  }

  createPopup() {
    let popup = document.createElement('div');
    popup.classList.add('error-popup');
    popup.innerHTML = `Sorry! An Error occred`;
    return popup;
  }

  showPopup() {
    if (this.body.contains(this.popup)) {
      this.hidePopup();
    }
    this.body.appendChild(this.popup);
    setTimeout(() => {
      if (this.body.contains(this.popup)) {
        this.hidePopup();
      }
    }, 5000);
  }

  hidePopup() {
    this.body.removeChild(this.popup);
  }
}
