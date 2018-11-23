export const createNewsChannelItem = (channelName,channelId, currentChannel) => {
  let newsItem = document.createElement('li');
  newsItem.innerHTML = channelName;
  newsItem.classList.add('card', 'news-channel');
  newsItem.setAttribute('id', channelId);
  if (channelId === currentChannel) {
    newsItem.classList.add('active-channel')
  }
  return newsItem;
}
