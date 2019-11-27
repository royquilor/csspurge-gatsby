import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  background: black;
  background: linear-gradient(to bottom, #FAFAFA, #E0E0E0);
  padding: var(--space-xxs) 0;
  font-family: var(--sans-serif);
  font-size: var(--f7);
  color: var(--gray-9);
  font-weight: 500;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-bottom: -.75rem;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  position: relative;
  text-align: center;
  border: 1px solid #EEEEEE;
`;

function FileName({children}) {
  return (
  <Wrap>
    {children}
  </Wrap>
);
}

export default FileName;
