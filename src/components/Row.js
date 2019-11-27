import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  display:grid;
  grid-template-columns: repeat(1,1fr);
  max-width: 40rem;
  margin: 0 auto;
  @media screen and (min-width: 80rem) {
    grid-template-columns: repeat(3,1fr);
    grid-gap: var(--space-xl);
    margin-bottom: var(--space-xxl);
  }
`;

function Row({ children }) {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
}

export default Row;
