import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

import './index.scss';

const books = {
  books: [
    {
      title: 'Harey Potter',
      author: 'Tola',
      category: 'action',
    },

    {
      title: 'Enlogated Phases',
      author: 'Joshua',
      category: 'History',
    },

    {
      title: 'Speed of Light',
      author: 'Grace',
      category: 'Sci-fiction',
    },

    {
      title: 'Face of the Highlighted',
      author: 'Bolu',
      category: 'Commedy',
    },
  ],
};
const store = createStore(
  rootReducer,
  books,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
