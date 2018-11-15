import './style.css';
import { createNewsChannelItem } from "./news-channel-item";
import { arrayOfNewsChannels } from './constants';
import { createArtciles } from './create-articles';
import { Loader } from "./components/loader";

let currentChannel = 'cnn';
let loader;

const setCssClass = (currentValue, className) => {
  let previousItem = document.querySelector(`.${className}`);
  previousItem.classList.remove(`${className}`);
  let currentItem = document.querySelector(`#${currentValue}`);
  currentItem.classList.add(`${className}`);
};

const onContainerClick  = (event) => {
  if (event.target === event.currentTarget) {
    return;
  }
  const newsChannelId = event.target.innerHTML;
  setCssClass(newsChannelId, 'active-channel');

  if (currentChannel !== newsChannelId) {
    const newsContainer = document.querySelector('#newsChannels');
    const news = document.querySelector('#news');
    const newArticlesContainer = document.createElement('div');
    const currentArticles = document.querySelector('.news-articles');

    newsContainer.removeEventListener('click', onContainerClick);
    news.removeChild(currentArticles);
    newArticlesContainer.classList.add('news-articles');
  
    currentChannel = newsChannelId;
    news.appendChild(newArticlesContainer);
    loader.showLoader();
    createArtciles(newsChannelId)
      .then(data => {
        Promise.all(data.arrayOfPromises).then(() => {
          data.arrayOfArticles.forEach(element => {
          newArticlesContainer.appendChild(element);
          });
          loader.hideLoader();
          newsContainer.addEventListener('click', onContainerClick);
        })
      })
      .catch(err => {
        console.log(err);
        newsContainer.addEventListener('click', onContainerClick);
      });
  }
};

let myFunc = () => {
  const newsContainer = document.querySelector('#newsChannels');
  const news = document.querySelector('#news');
  const newsArticlesContainer = document.createElement('div');

  loader = new Loader(news);
  loader.createLoader();

  newsArticlesContainer.classList.add('news-articles');
  news.appendChild(newsArticlesContainer);
  loader.showLoader();
  createArtciles(currentChannel).then(data => {
    Promise.all(data.arrayOfPromises)
    .then(() => {
      data.arrayOfArticles.forEach(element => {
      newsArticlesContainer.appendChild(element);
      });
      loader.hideLoader();
    })
    .catch(err => console.log(err));
  })
  .then(() => {
    newsContainer.addEventListener('click', onContainerClick);
  });

  arrayOfNewsChannels.forEach(channel => {
    newsContainer.appendChild(createNewsChannelItem(channel, currentChannel));
  });
};

document.addEventListener('load', myFunc());
