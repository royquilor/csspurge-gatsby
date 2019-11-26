import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  display:flex;
  flex-direction: column;
  p {
    margin: 0!important;
    max-width: 100%!important;
    font-size: var(--f5);
    margin: 0;
  }
  a {
    font-size: var(--f3);
  }
`;

function Col({ children }) {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
}

export default Col;
