import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

import './index.scss';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const booksArray = [
  {
    title: 'Harey Potter',
    author: 'Tola',
    category: 'action',
  },

  const booksArray = [
    {
      title: 'Face of the Highlighted ',
      author: 'Joshua',
      category: 'Commedy',
    },

    const booksArray = [
      {
        title: 'Speed of Light',
        author: 'Grace',
        category: 'Sci-friction',
      },

      const booksArray = [
        {
          title: 'Elongated Phases',
          author: 'Bolu',
          category: 'History',
        },
];

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
