import React from 'react';
import Types from 'prop-types';
import { NavLink } from 'react-router-dom';

export const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={`/${filter === 'all' ? '' : filter}`}
    style={{ padding: '20px' }}
    activeStyle={{
      color: 'black',
      textDecoration: 'none',
    }}
  >
    {children}
  </NavLink>
);

FilterLink.propTypes = {
  filter: Types.string.isRequired,
  children: Types.node.isRequired,
};
