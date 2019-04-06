import React from 'react';
import {
  Card, Col, Container, Jumbotron, Row,
} from 'react-bootstrap';
import './TodoApp.css';
import logo from './logo.svg';
import { AddTodo } from '../../containers/AddTodo/AddTodo';
import { VisibleTodoList } from '../../containers/VisibleTodoList/VisibleTodoList';
import { Footer } from '../Footer/Footer';

export const TodoApp = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <Jumbotron>
          <header>
            <h1>
              <img src={logo} className="App-logo" alt="logo" />
              TodoApp Example
            </h1>
          </header>
        </Jumbotron>
        <main>
          <Card>
            <Card.Header>
              <AddTodo />
            </Card.Header>
            <VisibleTodoList />
            <Footer />
          </Card>
        </main>
      </Col>
    </Row>
  </Container>
);
