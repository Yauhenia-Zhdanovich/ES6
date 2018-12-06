// import { FetchService } from './fetch-service';
import { apiKey } from './constants';
import { Article } from './components/article';
import { httpService } from './fetch-service';

export async function createArtciles (newsChannelId) {
  let settings = {
    newsChannelId,
    key: apiKey
  };
  return httpService('GET', settings).then(data => {
    let arrayOfPromises = [];
    let arrayOfArticles = [];
    data.forEach(element => {
      let articles = new Article(element);
      arrayOfPromises = [...arrayOfPromises, articles.createArticleComponent()];
      arrayOfArticles.push(articles.component);
    });
    return {
      arrayOfPromises: arrayOfPromises,
      arrayOfArticles: arrayOfArticles
    }
  })
};