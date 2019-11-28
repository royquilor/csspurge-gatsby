import React from 'react'
import styled from 'styled-components';

const Intro = styled.div`
  p {
    font-size: var(--f4);
  }
  @media screen and (min-width: 30em) {
    p {
      font-size: var(--f3);
    }
  }
`;

function IntroText(props) {
  return (
    <Intro>
      <p>{props.text}</p>
    </Intro>
  );
}


export default IntroText;
