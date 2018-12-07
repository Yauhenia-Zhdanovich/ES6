import { apiKey } from './constants';
import { httpService } from './fetch-service';
import { store } from './store/store';
import { handleErrors } from './helpers';

export async function createArtciles (newsChannelId) {
  const settings = {
    newsChannelId,
    key: apiKey
  };
  return httpService('GET', settings)
    .then(data => {
      store.dispatch({
        type: 'LOAD_ARTICLES_SUCCESS',
        payload: data
      })
    })
    .catch(handleErrors)
};