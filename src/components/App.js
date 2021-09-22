import React from 'react';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';

const App = () => (
  <div className="App pb-5">
    <BooksList />
    <BookForm />
  </div>
);

export default App;
