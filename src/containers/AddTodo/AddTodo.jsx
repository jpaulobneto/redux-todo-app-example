import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Col, Form } from 'react-bootstrap';
import { addTodo } from '../../actionCreators';

const AddTodoComponent = ({ dispatch }) => {
  let input;

  return (
    <Form onSubmit={event => event.preventDefault()}>
      <Form.Row>
        <Col>
          <Form.Control
            ref={(node) => {
              input = node;
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && input.value !== '') {
                dispatch(addTodo(input.value));
                input.value = '';
              }
            }}
          />
        </Col>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(addTodo(input.value));
            input.value = '';
          }}
        >
          Add todo
        </Button>
      </Form.Row>
    </Form>
  );
};

AddTodoComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export const AddTodo = connect()(AddTodoComponent);
