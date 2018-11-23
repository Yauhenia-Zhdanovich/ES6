export class Article {
  constructor(
    {
      description = 'follow the link to find out more',
      publishedAt = '',
      title = '',
      url = '',
      urlToImage
    }) {
    this.description = description || 'follow the link to find out more';
    this.publishedAt = publishedAt || '';
    this.title = title || '';
    this.url = url || '';
    this.urlToImage = urlToImage || '';
    this.component = null;
  }

  createArticleComponent() {
    const articleComponent = document.createElement('section');
    const image = document.createElement('img');
    const content = document.createElement('div');
    articleComponent.classList.add('card');
    image.setAttribute('src', this.urlToImage);
    content.innerHTML = `
      <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <time>${this.publishedAt}</time>
        <p class="card-text">${this.description}</p>
        <a href="${this.url}" class="btn btn-primary" target="_blank">read more...</a>
      </div>
    `;
    articleComponent.appendChild(image);
    articleComponent.appendChild(content);
    this.component = articleComponent;
    if (this.urlToImage) {
      return new Promise((resolve) => {
        image.addEventListener('load', () => {
          resolve();
        });
      });
    }
  }
}
