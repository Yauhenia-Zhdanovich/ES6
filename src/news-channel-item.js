export const createNewsChannelItem = (channelId, currentChannel) => {
  let newsItem = document.createElement('div');
  newsItem.innerHTML = channelId;
  newsItem.classList.add('card');
  newsItem.classList.add('news-channel');
  newsItem.setAttribute('id', channelId);
  if (channelId === currentChannel) {
    newsItem.classList.add('active-channel')
  }
  return newsItem;
}
