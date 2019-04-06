import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spinner, Card } from 'react-bootstrap';
import { TodoList } from '../../components/TodoList/TodoList';
import * as actions from '../../actionCreators';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../../rootReducer';
import { FetchError } from '../../components/FetchError/FetchError';

function TodoListWrapper(props) {
  const { filter, fetchTodos } = props;

  const fetchData = () => {
    fetchTodos(filter);
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const {
    isFetching, errorMessage, toggleTodo, todos,
  } = props;
  if (isFetching && !todos.length) {
    return (
      <Card.Body className="text-center">
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Card.Body>
    );
  }
  if (errorMessage && !todos.length) {
    return <FetchError message={errorMessage} onRetry={fetchData} />;
  }
  return <TodoList todos={todos} onTodoClick={toggleTodo} />;
}

TodoListWrapper.defaultProps = {
  errorMessage: null,
  isFetching: false,
};

TodoListWrapper.propTypes = {
  errorMessage: PropTypes.string,
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
    errorMessage: getErrorMessage(state, filter),
    filter,
  };
};

export const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    actions,
  )(TodoListWrapper),
);
