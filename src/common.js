export const generateRandomNumber = (range = 10000) => Math.floor(Math.random() * range);

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const filterBooksByCategory = (books, param) => (
  books.filter(({ category }) => category === param)
);

export const defaultBooks = [
  {
    id: generateRandomNumber(),
    title: 'ABSALOM, ABSALOM!',
    author: 'WILLIAM FAULKNER',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    id: generateRandomNumber(),
    title: 'A TIME TO KILL',
    author: 'JOHN GRISHAM',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    id: generateRandomNumber(),
    title: 'THE HOUSE OF MIRTH',
    author: 'EDITH WHARTON',
    category: categories[generateRandomNumber(categories.length)],
  },
];
