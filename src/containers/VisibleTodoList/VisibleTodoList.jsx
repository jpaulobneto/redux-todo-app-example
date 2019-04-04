import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TodoList } from '../../components/TodoList/TodoList';
import { toggleTodo } from '../../actionCreators';
import { getVisibleTodos } from '../../rootReducer';
import { fetchTodos } from '../../api';

class TodoListWrapper extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    fetchTodos(this.props.filter).then(todos => console.log(this.props.filter, todos));
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return { todos: getVisibleTodos(state, filter), filter };
};

export const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo },
  )(TodoListWrapper),
);
