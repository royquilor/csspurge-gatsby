import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  table {
    font-family: var(--sans-serif);
    font-size: var(--f7);
    margin-left: auto;
    margin-right: auto;
    margin-bottom var(--space-xxl);

  }
  tr {
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  tr:hover {
    background-color: #e53935;
  }
  th {
    text-transform: uppercase;
    font-size: var(--f8);
    padding: 0 var(--space-xxs);
    font-weight: 600;
    color: var(--gray-8);
    position: sticky;
    top: 0;
    background: white;
  }
  td {
    padding: 0 var(--space-xxs);
    text-align: right;
    color: var(--gray-8);
    font-weight: 600;
  }
  td:first-child {
    text-align: left;

    color: var(--gray-8);
  }
  tr:hover td {
    color: white;
  }
`;

function Table(props) {
  return (
  <Wrap>
  <table cellspacing="0">
    <thead>
      <tr>
        <th></th>
        <th>Floats</th>
        <th>Unique colors</th>
        <th>Font sizes</th>
        <th>Font families</th>
        <th>Media queries</th>
        <th>Style tags</th>
        <th>Style links</th>
      </tr>
    </thead>
    <tbody>
    {props.data.map(item =>
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.floats}</td>
        <td>{item.uniquecolors}</td>
        <td>{item.fontsizes}</td>
        <td>{item.fontfamilies}</td>
        <td>{item.mediaqueries}</td>
        <td>{item.styletags}</td>
        <td>{item.stylelinks}</td>
      </tr>
    )}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="">* css frameworks</td>
      </tr>
    </tfoot>
  </table>
</Wrap>
);
}

export default Table;
