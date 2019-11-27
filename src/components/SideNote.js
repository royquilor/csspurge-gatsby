import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  margin-bottom: var(--space-lg);
  div {
    background-color: #FFFDE7;
    padding: var(--space);

    font-family: var(--serif);
    font-size: var(--f4);
    line-height: var(--lh-copy);
  }
`;

function SideNote({ children }) {
  return (
    <Wrap>
      <div>
        {children}
      </div>
    </Wrap>
  );
}

export default SideNote;
