import React from 'react'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Page from '../components/Page'
import { useSiteMetadata } from '../hooks'

const NotFoundTemplate = () => {
  const { title, subtitle, keywords } = useSiteMetadata()

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle} keywords={keywords}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  )
}

export default NotFoundTemplate
