import PropTypes from 'prop-types';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Button';

export default function BasicTextFields({
  title, handleAction,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem('bookStoreToken');
  if (token) {
    return <Navigate to="/store" />;
  }
  return (
    <div>
      <div className="heading-container">
        <h3>
          {title}
          {' '}
          Form
        </h3>
      </div>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          type="password"
          label="Enter the Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>

      <Button title={title} handleAction={() => handleAction(email, password)} />
    </div>
  );
}

BasicTextFields.propTypes = {
  title: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};
