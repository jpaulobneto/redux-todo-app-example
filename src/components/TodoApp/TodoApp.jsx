import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { AddTodo } from '../../containers/AddTodo/AddTodo';
import { VisibleTodoList } from '../../containers/VisibleTodoList/VisibleTodoList';
import { Footer } from '../Footer/Footer';

export const TodoApp = ({ match }) => (
  <Container>
    <Row>
      <Col xs={12}>
        <header>
          <h1>TodoApp Example</h1>
        </header>
        <main>
          <AddTodo />
          <VisibleTodoList filter={match.params.filter || 'all'} />
          <Footer />
        </main>
      </Col>
    </Row>
  </Container>
);

TodoApp.propTypes = {
  match: PropTypes.shape({
    filter: PropTypes.bool,
  }).isRequired,
};
