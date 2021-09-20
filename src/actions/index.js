import { ADD_BOOK, REMOVE_BOOK, FILTER_BOOK } from './type';

export const addBook = book => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const filterBooks = category => ({
  type: FILTER_BOOK,
  payload: category,
});
