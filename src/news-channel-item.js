export const createNewsChannelItem = (channelName,channelId, currentChannel) => {
  let newsItem = document.createElement('div');
  newsItem.innerHTML = channelName;
  newsItem.classList.add('card');
  newsItem.classList.add('news-channel');
  newsItem.setAttribute('id', channelId);
  if (channelId === currentChannel) {
    newsItem.classList.add('active-channel')
  }
  return newsItem;
}
