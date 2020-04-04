import { useStaticQuery, graphql } from 'gatsby'
const {
  CATEGORY_COLORS,
  CATEGORY_COLOR_EXTRA
} = require('../../gatsby/constants/categories.js')

const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )

  return allMarkdownRemark.group.map((cat, i) => ({
    ...cat,
    categoryColor: CATEGORY_COLORS[i] || CATEGORY_COLOR_EXTRA
  }))
}

export default useCategoriesList
