export class FetchService {
  constructor() {}

  fetchDataFromServer(newsChannelId, key) {
    return fetch(`https://newsapi.org/v1/articles?source=${newsChannelId}&apiKey=${key}`)
      .then(resp => resp.json())
      .then(data => {
        return data.articles || [];
      });
  }
}
