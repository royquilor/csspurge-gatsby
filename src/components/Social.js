import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
  ul {
    list-style:none;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: var(--space-xl);
    text-align: center;
    padding-left: 0;
  }
  li::before {
    content: "";
  }
  a {
    display: block;
    border-radius: 50%;
    transition: .2s;
  }
  .icon {
    color: var(--gray-8);
    transition: color .2s;
    width: 2rem;
    height: 2rem;
  }
`;

function Social(props) {
  return (
    <Wrap>
      <h2>Share Article</h2>
      <ul>
        <li>
          <a data-social="twitter" data-text="Hi there! https://www.csspurge.com via @csspurge" data-hashtags="#nuggets, #css" href="https://twitter.com/intent/tweet">
            <svg className="icon" viewBox="0 0 32 32">
              <title>Share on Twitter</title>
              <g>
                <path d="M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3 c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5 c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z"></path>
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a data-social="facebook" data-url="https://www.csspurge.com" href="http://www.facebook.com/sharer.php">
            <svg className="icon" viewBox="0 0 32 32">
              <title>Share on Facebook</title>
              <path d="M32,16A16,16,0,1,0,13.5,31.806V20.625H9.438V16H13.5V12.475c0-4.01,2.389-6.225,6.043-6.225a24.644,24.644,0,0,1,3.582.312V10.5H21.107A2.312,2.312,0,0,0,18.5,13v3h4.438l-.71,4.625H18.5V31.806A16,16,0,0,0,32,16Z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a data-social="mail" data-subject="Email Subject" data-body="Content of my email." href="mailto:">
            <svg className="icon" viewBox="0 0 32 32">
                <title>Share by Email</title>
                <g>
                    <path d="M28,3H4A3.957,3.957,0,0,0,0,7V25a3.957,3.957,0,0,0,4,4H28a3.957,3.957,0,0,0,4-4V7A3.957,3.957,0,0,0,28,3Zm.6,6.8-12,9a1,1,0,0,1-1.2,0l-12-9A1,1,0,0,1,4.6,8.2L16,16.75,27.4,8.2a1,1,0,1,1,1.2,1.6Z"></path>
                </g>
            </svg>
          </a>
        </li>
      </ul>
    </Wrap>
  );
}

export default Social;
