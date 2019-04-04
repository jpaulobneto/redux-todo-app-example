import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addTodo } from '../actionCreators';

const AddTodoComponent = ({ dispatch }) => {
  let input;

  return (
    <React.Fragment>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <Button
        bsStyle="primary"
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add todo
      </Button>
    </React.Fragment>
  );
};

AddTodoComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export const AddTodo = connect()(AddTodoComponent);
