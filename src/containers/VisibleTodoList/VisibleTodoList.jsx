import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TodoList } from '../../components/TodoList/TodoList';
import * as actions from '../../actionCreators';
import { getVisibleTodos, getIsFetching } from '../../rootReducer';

function TodoListWrapper(props) {
  const fetchData = () => {
    const { filter, fetchTodos } = props;
    fetchTodos(filter);
  };

  useEffect(() => {
    fetchData();
  }, [props.filter]);

  const { toggleTodo, isFetching, todos } = props;
  if (isFetching && !todos.length) return <p>Loading...</p>;
  return <TodoList todos={todos} onTodoClick={toggleTodo} />;
}

TodoListWrapper.defaultProps = {
  isFetching: false,
};

TodoListWrapper.propTypes = {
  filter: PropTypes.string.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  };
};

export const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    actions,
  )(TodoListWrapper),
);
