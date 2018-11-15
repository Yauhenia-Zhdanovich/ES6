import { FetchService } from './fetch-service';
import { apiKey } from './constants';
import { Article } from './components/article';

const fetchService = new FetchService;

export const createArtciles = (newsChannelId) => {
  return fetchService.fetchDataFromServer(newsChannelId, apiKey).then(data => {
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