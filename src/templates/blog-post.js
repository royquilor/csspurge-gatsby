import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Social from '../components/Social'

import styled from 'styled-components';

const Date = styled.p`
  font-size: var(--f7);
  font-family: var(--code);
  color: var(--gray-6);
  text-align: center;
`;
const Header = styled.header`
  h1 {
    font-family: var(--orbitron);
    font-size: var(--f1);
    margin-bottom: var(--space-sm);
    line-height: var(--lh-solid);
  }
  margin-bottom: var(--space-xxl);
`;
const Nav = styled.nav`
  margin: calc(2 * var(--space-xxl)) 0;
  display: flex;
  ul {
    max-width: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
  }
  li {
    font-size: var(--f3);
    font-weight: 600;
    font-family: var(--orbitron);
    margin: var(--space);
    padding-left: 0;
  }
  li:first-child a {
    color: var(--orange-6);
  }
  li:last-child a {
    color: var(--red-6);
  }
  li::before {
    content: "";
  }
`;
const Section = styled.section`
  margin: 0 0 var(--space-xxl);
  padding: 0 0 var(--space-xxl);
  border-bottom: 1px solid rgba(0,0,0,.1);
  p,
  li {
    font-family: var(--sans-serif);
  }
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  pre {
    max-width: 40rem;
  }
  h2 {
    margin-bottom: var(--space-lg);
  }
  h3 {
    font-family: var(--sans-serif);
    margin-top: var(--space-xxl);
    margin-bottom: var(--space-lg);
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <article>
        <Header>
          <h1>{post.frontmatter.title}</h1>
          <Date>
            {post.frontmatter.date}
          </Date>
        </Header>
        <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        <Social />
        <Nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        </Nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        published
      }
      body
    }
  }
`
