import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout as AntLayout } from 'antd'

const Layout = ({ children, title, description, keywords, article }) => (
  <AntLayout className="bg-transparent min-h-screen">
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {article && <meta property="og:type" content="article" />}
      {article && article.title && <meta property="og:title" content={article.title} />}
      {article && article.description && (
        <meta property="og:description" content={article.description} />
      )}
    </Helmet>
    {children}
  </AntLayout>
)

export default Layout
