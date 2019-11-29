import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import SubscribeForm from '../components/SubscribeForm'

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const { location, title, children, description } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    return (
      <Layout title={siteTitle} location={this.props.location} description={siteDescription}>
        <SEO title="Contact" />
        <h1>Subscribe</h1>
        <SubscribeForm />
      </Layout>
    )
  }
}

export default Contact

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
