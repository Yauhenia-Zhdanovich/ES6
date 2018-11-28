export class FetchService {
  constructor() {}

  fetchDataFromServer(newsChannelId, key) {
    return fetch(`https://newsapi.org/v1/articles?source=${newsChannelId}&apiKey=${key}`)
      .then(resp => resp.json())
      .catch(err => {
        console.log(err);
        return [];
      })
      .then(data => {
        return data.articles || [];
      });
  }
}
// {
//   "presets" : ["es2015", "react"],
// "plugins": [
//       "transform-object-rest-spread",
//       "@babel/plugin-proposal-object-rest-spread",
//       "transform-runtime"
//   ]
// }