const handleErrors = (err) => {
  import('./components/error-pop-up').then(module => {
    const ErrorPopup = module.ErrorPopup;
    let popup = new ErrorPopup();
    popup.showPopup();
    console.log(err);
  })
  return [];
} 

function fetchData(method, settings) {
  switch (method) {
    case 'GET':
      return fetch(`https://newsapi.org/v1/articles?source=${settings.newsChannelId}&apiKey=${settings.key}`)
      .then(resp => resp.json())
      .catch(handleErrors)
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
      .catch(handleErrors());
    case 'PUT':
      return fetch('https://newsapi.org/v1/articles', {
        method: 'PUT',
        body: settings.body
      })
      .then(response => response.json())
      .catch(handleErrors);
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
