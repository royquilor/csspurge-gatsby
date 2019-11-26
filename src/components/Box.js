import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  display:flex;
  flex-direction: column;
`;

function Box({ children }) {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
}

export default Box;
