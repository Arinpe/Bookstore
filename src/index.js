import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

import './index.scss';

const books = {
  books: [
    {
      id: 1,
      title: 'Harey Potter',
      author: 'Tola',
      category: 'action',
    },

    {
      id: 2,
      title: 'Enlogated Phases',
      author: 'Joshua',
      category: 'History',
    },

    {
      id: 3,
      title: 'Speed of Light',
      author: 'Grace',
      category: 'Sci-Fi',
    },

    {
      id: 4,
      title: 'Face of the Highlighted',
      author: 'Bolu',
      category: 'Learning',
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
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
