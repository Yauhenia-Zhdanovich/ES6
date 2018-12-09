export function updateView(state, loader, articlesContainer) {
  loader.updateView(state.loading);
  if (state.loaded && state.currentNewsArticles) {
    articlesContainer.updateView(state.currentNewsArticles, state.loading);
  }
}