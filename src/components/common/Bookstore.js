import Form from './form';
import BookForm from '../../containers/BookForm';
import BooksList from '../../containers/BooksList';

const Bookstore = () => (
  <div className="Bookstore pb-5">
    <Form />
    <BooksList />
    <BookForm />
  </div>
);
export default Bookstore;
