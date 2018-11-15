export class Loader {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.loader = null;
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
      <div class="circle-loader"></div>`;
      this.loader = loader;
  }

  showLoader() {
    console.log('loader')
    this.parentElement.appendChild(this.loader);
  }

  hideLoader() {
    let loader = document.querySelector('.loader');
    this.parentElement.removeChild(loader);
  }
}
