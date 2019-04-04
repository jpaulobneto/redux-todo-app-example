import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TodoList as Component } from '../../components/TodoList/TodoList';
import { toggleTodo } from '../../actionCreators';
import { getVisibleTodos } from '../../rootReducer';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all'),
});

export const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo },
  )(Component),
);
