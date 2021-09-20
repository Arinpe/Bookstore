import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { generateRandomNumber } from '../common';

function Book({ book, handleRemoveBook }) {
  const {
    id, title, author, category,
  } = book;
  return (
    <div className="d-flex justify-content-between book p-4 mb-3">
      <div className="d-flex justify-content-between align-items-center book-left px-5">
        <div className="book-info">
          <p className="category mb-1">{category}</p>
          <p className="title mb-2">{title}</p>
          <p className="author mb-2">{author}</p>
          <div className="d-flex book-actions">
            <Button variant="link">Comments</Button>
            <Button onClick={() => handleRemoveBook(id)} variant="link">Remove</Button>
            <Button variant="link">Edit</Button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="oval mr-4" />
          <h3 className="percentage">
            {generateRandomNumber(100)}
            %
            <span className="d-block completed">Completed</span>
          </h3>
        </div>
      </div>
      <div className="d-flex flex-column book-right px-5">
        <h5 className="current-chapter">Current Chapter</h5>
        <h3>
          Chapter:
          {generateRandomNumber(20)}
        </h3>
        <Button variant="primary">Update Progress</Button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
