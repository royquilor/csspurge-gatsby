import React from 'react'
import { Link } from 'gatsby'

import { GlobalStyle } from '../theme/globalStyle';
import styled from 'styled-components';
import '../styles/global.css'

import EmailListForm from '../components/EmailListForm'
import Social from '../components/Social'

const HeaderWrapper = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-xxl) 0;
  margin-bottom: var(--space-xl);
`;
const SiteTitle = styled.h1`
  margin: 0 0 var(--space-xs);
  line-height: var(--lh-solid);
  font-weight: bold;
  a {
    color: var(--gray-8);
  }
`;
const SiteDescription = styled.p`
  font-size: var(--f5);
  margin: 0;
  color: var(--gray-6);
  text-align: center;
  line-height: var(--lh-title);
`;
const MainWrap = styled.div`
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  footer,
  big {
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    padding-left: var(--space);
    padding-right: var(--space);
  }
  blockquote p {
    max-width: 60rem;
  }
`;
const PostHeader = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  padding: var(--space-xl);
  h3 {
    font-family: var(--orbitron);
    margin: 0 0 var(--space);
  }
  a {
    color: var(--gray-9);
  }
`;
const Footer = styled.div`
  font-family: var(--code);
  font-size: var(--f7);
  margin: var(--space-xxl) 0;
  text-align: center;
  color: var(--gray-6);
`;
const Span = styled.span`
  margin-left: var(--space-xs);
  margin-right: var(--space-xs);
`;

class Layout extends React.Component {
  render() {
    const { location, title, children, description } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeaderWrapper>
          <GlobalStyle />
          <SiteTitle>
            <Link to={`/`}>
              {title}
            </Link>
          </SiteTitle>
          <SiteDescription>
            {description}
          </SiteDescription>
        </HeaderWrapper>
      )
    } else {
      header = (
        <PostHeader>
          <GlobalStyle />
          <h3>
            <Link to={`/`}>
              {title}
            </Link>
          </h3>
          <SiteDescription>
            {description}
          </SiteDescription>
        </PostHeader>
      )
    }
    return (
      <div>
      <header>{header}</header>
      <MainWrap>
        <main>{children}</main>
        <EmailListForm />
        <Social />
        <Footer>
          © {new Date().getFullYear()}, Built with ❤️ and
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a><Span>&middot;</Span>
          <a href="mailto:roy@csspurge.com" target="_blank">Email</a><Span>&middot;</Span>
          <Link to={`/privacy`}>Privacy</Link><Span>&middot;</Span>
          <Link to={`/disclosure`}>Disclosure</Link>
        </Footer>
      </MainWrap>
      </div>
    )
  }
}

export default Layout
