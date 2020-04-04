const path = require('path')
const siteConfig = require('../../config.js')
const { getAllCategories } = require('../constants/categories.js')

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = siteConfig
  const allCategories = await getAllCategories(graphql)

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  result.data.allMarkdownRemark.group.map(category => {
    const numPages = Math.ceil(category.totalCount / postsPerPage)
    const categorySlug = `/category/${category.fieldValue}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? categorySlug : `${categorySlug}/page/${i}`,
        component: path.resolve('./src/templates/category-template.js'),
        context: {
          category: category.fieldValue,
          allCategories,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? categorySlug : `${categorySlug}/page/${i - 1}`,
          nextPagePath: `/${categorySlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1
        }
      })
    }
    return null
  })
}
