import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PrivacyPolicy from '../components/PrivacyPolicy'
import styled from 'styled-components'

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;

`;

class Disclosure extends React.Component {
  render() {
    const { data } = this.props
    const { location, title, children, description } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    return (
      <Layout title={siteTitle} location={this.props.location} description={siteDescription}>
        <SEO title="Disclosure" description="Disclosure" />
        <Div>
          <PrivacyPolicy />
        </Div>
      </Layout>
    )
  }
}

export default Disclosure

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
