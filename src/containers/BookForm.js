import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addBook } from '../actions';
import { categories, generateRandomNumber } from '../common';

const initialValue = {
  title: '',
  author: '',
  category: '',
};
const BookForm = ({ createBook }) => {
  const [input, setInput] = useState(initialValue);
  const allCategories = categories.map((category) => (
    <option
      key={category}
    >
      {category}
    </option>
  ));
  const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value });
  const validateInputError = () => {
    const { title, author, category } = input;
    let error = '';
    if (!title) {
      error = 'Title is required';
    } else if (title.length < 2) {
      error = 'Title should have minimum of two(2) characters';
    } else if (!author) {
      error = 'Author is required';
    } else if (author.length < 3) {
      error = 'Author should have minimum of three(3) characters';
    } else if (!category) {
      error = 'Category is required';
    }
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateInputError();
    if (!error) {
      document.querySelector('#error').textContent = '';
      createBook({ ...input, id: generateRandomNumber() });
      setInput(initialValue);
    } else {
      document.querySelector('#error').textContent = error;
    }
  };
  return (
    <div className="container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <p className="text-danger" id="error" />
      <form className="d-flex" onSubmit={handleSubmit}>
        <input className="form-control mr-2" type="text" name="title" value={input.title} placeholder="Title" onChange={handleChange} />
        <input className="form-control mr-2" type="text" name="author" value={input.author} placeholder="Author" onChange={handleChange} />
        <select className="form-control mr-2" name="category" value={input.category} id="category" onChange={handleChange}>
          <option value="" disabled hidden>Category</option>
          {allCategories}
        </select>
        <Button className="w-50" type="submit" variant="primary">Add Book</Button>
      </form>
    </div>
  );
};
BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(addBook(book)),
});
export default connect(null, mapDispatchToProps)(BookForm);
