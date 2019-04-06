import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { Todo } from './components/Todo/Todo';

export const TodoList = ({ todos, onTodoClick }) => (
  <ListGroup>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ListGroup>
);

TodoList.defaultProps = {
  todos: [],
  onTodoClick() {},
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})),
  onTodoClick: PropTypes.func,
};
