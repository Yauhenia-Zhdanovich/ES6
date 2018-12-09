let initialState = {
  currentNewsArticles: [],
  currentChannel: 'cnn',
  loading: false,
  loaded: false
}

export const newsArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ARTICLES': 
      return {
        ...state,
        loading: true,
        loaded: false,
        currentChannel: action.payload
      };
    case 'LOAD_ARTICLES_SUCCESS':
      return {
        ...state,
        loading: false,
        loaded: true,
        currentNewsArticles: action.payload
      };
    case 'LOAD_ARTICLES_FAIL':
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
};
