import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'
import { useSiteMetadata, useTagsList } from '../hooks'

const TagsListTemplate = () => {
  const { title, subtitle, keywords } = useSiteMetadata()
  const tags = useTagsList()

  return (
    <Layout title={`Tags - ${title}`} description={subtitle} keywords={keywords}>
      <Sidebar />
      <Page title="Tags">
        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${tag.fieldValue}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  )
}

export default TagsListTemplate
