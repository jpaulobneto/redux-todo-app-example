import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AddTodo } from '../../containers/AddTodo/AddTodo';
import { VisibleTodoList } from '../../containers/VisibleTodoList/VisibleTodoList';
import { Footer } from '../Footer/Footer';

export const TodoApp = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <header>
          <h1>TodoApp Example</h1>
        </header>
        <main>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </main>
      </Col>
    </Row>
  </Container>
);
