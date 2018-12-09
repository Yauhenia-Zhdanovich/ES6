import { createNewsChannelItem } from "./news-channel-item";
import { newsChannels1 } from './constants';
import { createArtciles } from './create-articles';
import { Loader } from './components/loader';
import { setCssClass, contentUploadBootsrapper, handleErrors } from './helpers';
import { store } from './store/store';
import { updateView } from './update-view-service';
import { ArtcleContainer } from './components/article-container';

export default () => {
  let loader;
  let container;
  let currentChannel = store.getState().currentChannel;

  const onContainerClick = (event) => {
    if (event.target === event.currentTarget) {
        return;
    }
    
    const newsChannelId = event.target.id;
    setCssClass(newsChannelId, 'active-channel');
    
    if (currentChannel !== newsChannelId) {
      const newsContainer = document.querySelector('#newsChannels');
      newsContainer.removeEventListener('click', onContainerClick);
      getArticles(newsChannelId)
          .then(() => newsContainer.addEventListener('click', onContainerClick));
    }
  };

  async function getArticles(newsChannel) {
    let container = document.querySelector('#news');
    container.innerHTML = '';
    store.dispatch({
        type: 'LOAD_ARTICLES',
        payload: newsChannel
    });

    await createArtciles(newsChannel);
  };

  const main = () => {
      const newsContainer = document.querySelector('#newsChannels');
      const news = document.querySelector('#news');
      container = new ArtcleContainer(news);

      loader = new Loader(news);
      loader.createLoader();

      store.subscribe(() => {
        console.log('state was updated', store.getState());
        updateView(store.getState(), loader, container);
      });
      
      getArticles(currentChannel)
          .then(() => {
              newsContainer.addEventListener('click', onContainerClick);
          });
      Object.entries(newsChannels1).forEach((channel) => {
          newsContainer.appendChild(createNewsChannelItem(channel[0], channel[1], currentChannel));
      });
  };

  contentUploadBootsrapper().then(() => {
      main();
  });
}