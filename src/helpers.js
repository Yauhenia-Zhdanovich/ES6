import { createArtciles } from './create-articles';

export const setCssClass = (currentValue, className) => {
  let previousItem = document.querySelector(`.${className}`);
  previousItem.classList.remove(`${className}`);
  let currentItem = document.querySelector(`#${currentValue}`);
  currentItem.classList.add(`${className}`);
};

export async function contentUploadBootsrapper() {
  async function updateDom() {
    const welcomeContent = document.querySelector('.news__welcome-block');
    const body = document.querySelector('body');
    body.removeChild(welcomeContent);
    const newsContent = document.createElement('main');
    newsContent.classList.add('news');
    newsContent.innerHTML = `
      <section>
        <header class="news__channels-header">News Channels</header>
        <div id ="newsChannels" class="news__channel-list"></div>
      </section>
      <section>
        <header class="news__artclies-header">News</header>
        <section id="news"></section>
      </section>`;
    body.appendChild(newsContent);
  }
  return await updateDom();
}
