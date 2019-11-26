import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import SubscribeForm from '../components/SubscribeForm'

class Contact extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    return (
      <Layout location={this.props.location}>
        <SEO title="Contact" />
          <Link to={`/`}>
            {title}
          </Link>
        <h1>Subscribe</h1>
        <SubscribeForm />
      </Layout>
    )
  }
}

export default Contact
