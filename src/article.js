import { uuid } from "uuid";
import { resolve } from "path";

export class Article {
  constructor({description, publishedAt, title, url, urlToImage}) {
    this.id = 123;
    this.description = description;
    this.publishedAt = publishedAt;
    this.title = title;
    this.url = url;
    this.urlToImage = urlToImage;
    this.component = null;
  }

  createArticleComponent() {
    const articleComponent = document.createElement('section');
    articleComponent.innerHTML = `
      <img src="${this.urlToImage}" class="card-img-top"></img>
      <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
      </div>
    `;
    const image = document.createElement('img');
    image.setAttribute('src', this.urlToImage);
    this.component = articleComponent;
    return new Promise((resolve) => {
      image.addEventListener('load', () => {
        resolve();
        console.log('loaded');
      });
    });
  }
}
