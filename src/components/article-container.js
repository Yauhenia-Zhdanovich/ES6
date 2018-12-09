import { Article } from './article';
import { handleErrors } from '../helpers'; 

let instance = null;

export class ArtcleContainer {
  constructor(parent) {
    if (!instance) {
      instance = this;
      this.container = document.createElement('div');
      this.currentArticles = [];
      this.parent = parent;
      this.isShown = false;
    }
    return instance;
  }

  showContainer() {
    this.parent.appendChild(this.container);
    this.isShown = true;
  }

  hideContainer() {
    this.parent.removeChild(this.container);
    this.isShown = false;
  }

  updateView(state, isLoading) {
    if (JSON.stringify(this.currentArticles) === JSON.stringify(state)) {
      return
    } else {
      this.container.innerHTML = '';
      let componentsArticle = [];
      let artciles = state.map(element => {
        let article =  new Article(element);
        componentsArticle = [...componentsArticle, article]
        return article.createArticleComponent();
      });
      Promise.all(artciles)
        .then(() => {
          componentsArticle.forEach(element => {
            this.container.appendChild(element.component);
          });
          isLoading ? this.hideContainer() : this.showContainer();
          
        })
        .catch(handleErrors);
    }
  }
}
