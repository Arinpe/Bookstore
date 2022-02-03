/* eslint-disable */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Form from './common/form';
import Bookstore from './common/Bookstore';
import '../App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Router>
      <div className="App">
        <>
          <Routes>
            <Route
              path="/login"
              element={(
                <Form
                  title="Login"
                  setEmail={setEmail}
                  setPassword={setPassword}
                />
              )}
            />
            <Route
              path="/register"
              element={(
                <Form
                  title="Register"
                  setEmail={setEmail}
                  setPassword={setPassword}
                />
              )}
            />

            <Route
              path="/store"
              element={<Bookstore />} />
              )}
          </Routes>
        </>

      </div>
    </Router>
  );
}
export default App;
