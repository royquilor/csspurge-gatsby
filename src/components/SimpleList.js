import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    margin-top: 0;
    list-style-type: none;
  }
  li {
    line-height: var(--lh-title);
    margin-left: 0;
    padding-left: 0;
  }
  li::before {
    content: "";
  }
  h4 {
    margin-bottom: var(--space-sm);
    font-size: var(--f7);
    font-family: var(--sans-serif);
  }
  a {
    font-family: var(--sans-serif);
    color: var(--gray-6);
    font-size: var(--f7);
  }
  @media screen and (min-width: 80rem) {
    position: sticky;
    float: left;
    top: 0;
    left: var(--space);
  }
`;


function SimpleList(props) {
  return (
  <Nav>
  <h4>Quicklinks</h4>
  <ul>
    {props.list.map(item =>
      <li key={item.id}>
        <a href={item.href}>{item.name}</a>
      </li>
    )}
  </ul>
  </Nav>
);
}

export default SimpleList;
