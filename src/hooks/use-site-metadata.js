import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                telegram
                twitter
                linkedin
                instagram
                github
                email
                rss
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortname
            keywords
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
