/* eslint-disable */
import React from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import Form from './common/form';
import Bookstore from './common/Bookstore';  
import { app } from './common/firebase-config'; 
import '../App.css';

function App() {
  const authentication = getAuth();
  const navigate = useNavigate();
  const setToken = (token) => localStorage.setItem('bookStoreToken', token)
  const loginUser = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(authentication, email, password);
      const { accessToken } = user;
      setToken(accessToken);
      return navigate('/store');
    } catch (error) {
      alert(error.message)
    }

  };
  const registerUser = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(authentication, email, password);
      const { accessToken } = user;
      setToken(accessToken);
      return navigate('/store');
    } catch (error) {
      alert(error.message)
    }

  };
  return (
      <div className="App">
        <>
          <Routes>
            <Route path='/login, linkPath, linkText'
              element={
                <Form
                  title="Login"
                  handleAction={loginUser}
                  linkText="Register if you don't have an account"
                  linkPath="/login"
                />}
              />
            />
            <Route
              path="/register, linkPath, "
              element={(
                <Form
                  title="Register"
                  handleAction={registerUser}
                  linkText="Login if you already have an account"
              linkPath="/login"
                />
              )} 
    
            />
            <Route
              path="/store"
              element={<Bookstore />} />

            <Route
                    path="*"
                    element={<Navigate to="/register" />}
                />

          </Routes>
        </>

      </div>
  );
}
export default App;
