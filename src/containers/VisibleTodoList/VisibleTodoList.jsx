import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TodoList } from '../../components/TodoList/TodoList';
import { toggleTodo, receiveTodos } from '../../actionCreators';
import { getVisibleTodos } from '../../rootReducer';
import { fetchTodos } from '../../api';

function TodoListWrapper(props) {
  const fetchData = () => {
    const { filter, receiveTodos } = props;
    fetchTodos(filter).then(todos => receiveTodos(filter, todos));
  };

  useEffect(() => {
    fetchData();
  }, [props.filter]);

  return <TodoList {...props} />;
}

TodoListWrapper.propTypes = {
  filter: PropTypes.string.isRequired,
  receiveTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return { todos: getVisibleTodos(state, filter), filter };
};

export const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo, receiveTodos },
  )(TodoListWrapper),
);
