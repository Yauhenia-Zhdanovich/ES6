function fetchData(method, settings) {
  switch (method) {
    case 'GET':
      return fetch(`dhttps://newsapi.org/v1/articles?source=${settings.newsChannelId}&apiKey=${settings.key}`)
      .then(resp => resp.json())
      .then(data => {
        return data.articles || [];
      });
    case 'POST':
      return fetch('https://newsapi.org', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(settings.body)
      })
      .then(response => response.json())
    case 'PUT':
      return fetch('https://newsapi.org/v1/articles', {
        method: 'PUT',
        body: settings.body
      })
      .then(response => response.json())
    default:
      return false;
  }
}

export const httpService = new Proxy(fetchData, {
  apply: function(target, thisArg, argumentsList) {
    console.log(`sending the ${argumentsList[0]} method with ${JSON.stringify(argumentsList[1])} params`);
    return target.apply(thisArg, argumentsList);
  }
});
