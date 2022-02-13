import { Navigate } from 'react-router-dom';
import BookForm from '../../containers/BookForm';
import BooksList from '../../containers/BooksList';

const Bookstore = () => {
  const token = localStorage.getItem('bookStoreToken');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="Bookstore pb-5">
      <BooksList />
      <BookForm />
    </div>
  );
};
export default Bookstore;
