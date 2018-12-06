import { createNewsChannelItem } from "./news-channel-item";
import { newsChannels1 } from './constants';
import { createArtciles } from './create-articles';
import { Loader } from "./components/loader";
import { setCssClass, contentUploadBootsrapper } from "./helpers";

export default () => {
  let currentChannel = 'cnn';
  let loader;
  const onContainerClick = (event) => {
    if (event.target === event.currentTarget) {
        return;
    }
    const newsChannelId = event.target.id;
    setCssClass(newsChannelId, 'active-channel');
    if (currentChannel !== newsChannelId) {
      const newsContainer = document.querySelector('#newsChannels');
      const news = document.querySelector('#news');
      const currentArticles = document.querySelector('.news-articles');
      const newArticlesContainer = document.createElement('div');
      newsContainer.removeEventListener('click', onContainerClick);
      news.removeChild(currentArticles);
      currentChannel = newsChannelId;
      newArticlesContainer.classList.add('news-articles');
      news.appendChild(newArticlesContainer);
      loader.showLoader();
      getArticles(currentChannel, newArticlesContainer, newsContainer)
          .then(() => newsContainer.addEventListener('click', onContainerClick));
    }
  };

  async function getArticles(newsChannel, articlesContainer, newsContainer) {
    const articles = await createArtciles(newsChannel);
    async function attachArticles(data) {
      return Promise.all(data.arrayOfPromises)
              .then(() => {
                  data.arrayOfArticles.forEach(element => {
                      articlesContainer.appendChild(element);
                  });
                  loader.hideLoader();
              })
              .catch(err => {
                  console.log(err);
                  newsContainer.addEventListener('click', onContainerClick);
              });
      }
      return await attachArticles(articles);
  };

  const main = () => {
      const newsContainer = document.querySelector('#newsChannels');
      const news = document.querySelector('#news');
      const newsArticlesContainer = document.createElement('div');
      loader = new Loader(news);
      loader.createLoader();
      newsArticlesContainer.classList.add('news-articles');
      news.appendChild(newsArticlesContainer);
      getArticles(currentChannel, newsArticlesContainer, newsContainer)
          .then(() => {
              newsContainer.addEventListener('click', onContainerClick);
          });
      loader.showLoader();
      Object.entries(newsChannels1).forEach((channel) => {
          newsContainer.appendChild(createNewsChannelItem(channel[0], channel[1], currentChannel));
      });
  };
  contentUploadBootsrapper().then(() => {
      main();
  });
}