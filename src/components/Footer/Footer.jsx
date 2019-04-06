import React from 'react';
import { Card } from 'react-bootstrap';
import { FilterLink } from './components/FilterLink/FilterLink';

export const Footer = () => (
  <Card.Footer>
    <FilterLink filter="all">All</FilterLink>
    <FilterLink filter="active">Active</FilterLink>
    <FilterLink filter="completed">Completed</FilterLink>
  </Card.Footer>
);
