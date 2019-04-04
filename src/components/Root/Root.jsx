import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { TodoApp } from '../TodoApp/TodoApp';
import { fetchTodos } from '../../api';

fetchTodos('all').then(todos => console.log(todos));

export const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/:filter?" component={TodoApp} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
  }).isRequired,
};
