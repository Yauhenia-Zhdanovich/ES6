import './style.css';
import { Article } from './article';

const createNewsChannelItem = channelId => {
  let newsItem = document.createElement('div');
  newsItem.innerHTML = channelId;
  newsItem.classList.add('card');
  return newsItem;
}

const arrayOfNewsChannels = ['cnn', 'bloomberg', 'bbc-news', 'google-news', 'techcrunch', 'time', 'new-scientist', 'nfl-news', 'national-geographic', 'usa-today'];

let myFunc = () => {
  const newsContainer = document.querySelector('#newsChannels');
  arrayOfNewsChannels.forEach(channel => {
    newsContainer.appendChild(createNewsChannelItem(channel));
  });
  const onContainerClick  = (event) => {
    console.log('clicked');
    newsContainer.removeEventListener('click', onContainerClick);
    const newsChannelId = event.target.innerHTML;
    fetch(`https://newsapi.org/v1/articles?source=${newsChannelId}&apiKey=104b255245ef41b2a0311bc877694c67`)
      .then(resp => resp.json())
      .then(myJson => {
        console.log(myJson);
        if (myJson.status === "ok") {
          let arrayOfPromises = [];
          let arrayOfArticles = []
          myJson.articles.forEach(element => {
            let article = new Article(element);
            arrayOfPromises = [...arrayOfPromises, article.createArticleComponent()];
            arrayOfArticles.push(article.component);
          });
          Promise.all(arrayOfPromises).then(() => {
            console.log('all images are loaded');
            arrayOfArticles.forEach(element => {
              newsContainer.appendChild(element);
              newsContainer.addEventListener('click', onContainerClick);
            });
          })
        }
      })
      .catch((err) => {
        console.log(err);
        newsContainer.addEventListener('click', onContainerClick);
      });
  };
  newsContainer.addEventListener('click', onContainerClick);
};


document.addEventListener('load', myFunc());
