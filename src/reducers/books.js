import { ADD_BOOK, REMOVE_BOOK } from '../actions/type';
import { defaultBooks } from '../common';

export default (state = defaultBooks, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};
