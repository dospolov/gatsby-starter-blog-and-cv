import React from 'react'
import Helmet from 'react-helmet'
import { Layout as AntLayout } from 'antd'

const Layout = ({ children, title, description, keywords }) => (
  <AntLayout className="bg-transparent min-h-screen">
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Helmet>
    {children}
  </AntLayout>
)

export default Layout
