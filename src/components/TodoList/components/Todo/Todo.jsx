/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

export const Todo = ({ text, completed, onClick }) => (
  <ListGroup.Item
    onClick={onClick}
    style={{
      cursor: 'pointer',
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </ListGroup.Item>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
