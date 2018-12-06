import './style.scss';

const main = () => {
  const uploadButton = document.querySelector('.upload-button');

  uploadButton.addEventListener('click', () => {
    import('./upload-content.js').then(module => {
      let uploading = module.default;
      uploading();
    });
  });
}

document.addEventListener('load', main());