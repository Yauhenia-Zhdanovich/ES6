export class Loader {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.loader = null;
    this.isShown = false;
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
      <div class="circle-loader"></div>`;
      this.loader = loader;
  }

  updateView(state) {
    if (state !== this.isShown) {
      state ? this.showLoader() : this.hideLoader();
    }
  }

  showLoader() {
    this.isShown = true;
    this.parentElement.appendChild(this.loader);
  }

  hideLoader() {
    this.isShown = false;
    this.parentElement.removeChild(this.loader);
  }
}
