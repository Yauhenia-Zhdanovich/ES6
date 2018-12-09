import { createStore } from 'redux';
import { newsArticlesReducer } from './reducers/news-articles.reducer'; 

export const store = createStore(newsArticlesReducer);
