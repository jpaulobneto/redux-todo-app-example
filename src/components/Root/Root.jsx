import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

export const Root = ({ store }) => (
  <Provider store={store}>
    <h1>Hello World!</h1>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
  }).isRequired,
};
