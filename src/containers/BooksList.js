import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import { generateRandomNumber, filterBooksByCategory } from '../common';
import { removeBook, filterBooks } from '../actions';

const BooksList = ({
  books, deleteBook, filterBooks, filterParam,
}) => {
  const handleRemoveBook = (book) => deleteBook(book);
  const handleFilter = (e) => filterBooks(e.target.value);

  const filteredBooks = filterParam === 'All' ? books : filterBooksByCategory(books, filterParam);

  const allBooks = filteredBooks.map((book) => (
    <Book
      id={generateRandomNumber()}
      handleRemoveBook={handleRemoveBook}
      book={book}
      key={generateRandomNumber()}
    />
  ));
  return (
    <div className="books-display">
      <Navbar handleFilter={handleFilter} />
      <div className="container py-5">
        {allBooks}
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
  filterParam: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filterParam: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (book) => dispatch(removeBook(book)),
  filterBooks: (category) => dispatch(filterBooks(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
