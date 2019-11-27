import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  padding: var(--space);
`;

function Div({ children }) {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
}

export default Div;
