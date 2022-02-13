import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export default function BasicButtons({ title, handleAction }) {
  return (
    <Button variant="contained" onClick={handleAction}>{title}</Button>
  );
}

BasicButtons.propTypes = {
  title: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};
