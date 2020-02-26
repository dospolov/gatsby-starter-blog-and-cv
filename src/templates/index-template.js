import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Page from '../components/Page'
import Copyright from '../components/Copyright'
import Pagination from '../components/Pagination'
import { useSiteMetadata } from '../hooks'
import '../assets/css/init.css'

const IndexTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle, keywords } = useSiteMetadata()

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext

  const { edges } = data.allMarkdownRemark
  const pageTitle =
    currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle

  return (
    <Layout title={pageTitle} description={siteSubtitle} keywords={keywords}>
      <Sidebar />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
        <Copyright />
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          fields {
            slug
            categorySlug
            tagSlugs
          }
          frontmatter {
            title
            date
            tags
            category
            description
          }
        }
      }
    }
  }
`

export default IndexTemplate
