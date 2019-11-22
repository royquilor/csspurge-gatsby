import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: var(--f6);
  margin: 0 0 0 var(--space);
  padding-left: var(--space);
`;
const BioWrapper = styled.div`
  display: flex;
  align-items:center;
  margin: var(--space-xxl) var(--space) var(--space-xxl) 0;
  padding: var(--space-xxl) 0;
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <BioWrapper>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <Paragraph>
              Written by <strong>{author}</strong> who lives and works in
              Minneapolis building silly things.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow him on Twitter
              </a>
            </Paragraph>
          </BioWrapper>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
