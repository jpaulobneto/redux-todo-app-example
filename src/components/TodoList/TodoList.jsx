import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './components/Todo/Todo';

export const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

TodoList.defaultProps = {
  todos: [],
  onTodoClick() {},
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})),
  onTodoClick: PropTypes.func,
};
