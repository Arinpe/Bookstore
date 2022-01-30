import React from 'react';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BookForm';
import Form from  '../common/form';

const App = () => (
  <div className="App pb-5">
    <Form />
    <BooksList /> 
    <BookForm />
  </div>
);

export default App;