import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const FetchError = ({ message, onRetry }) => (
  <div>
    <p>
      Could not fetch todos.
      {message}
    </p>
    <Button variant="link" onClick={onRetry}>
      Retry
    </Button>
  </div>
);

FetchError.defaultProps = {
  message: '',
};

FetchError.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func.isRequired,
};
